import MenuBar from "../Components/MenuBar";
import "../Scss/Pages/WriteBoard.scss";
import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { uploadFile } from "../Aws/s3Upload";
import { postingPost } from "../Redux/Api/postingApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useCookieValue from "../Customhook/trackingCookie";

export default function WriteBoard() {
  /** 이미지,글 제목,글 내용 상태관리 */
  const [selectedFile, setSelectedFile] = useState(null);
  const [subject, setSbuject] = useState(null);
  const [content, setContent] = useState(null);
  const [price, setPrice] = useState(null);
  const [fileUrl, setfileUrl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookieValue = useCookieValue("token", 1000 * 600);

  useEffect(() => {
    if (cookieValue === undefined) {
      alert("로그인을 다시 해주세요");
      navigate("/");
    }
  });

  const upload = async (subject, content, fileUrl, price) => {
    try {
      await dispatch(postingPost({ subject, content, fileUrl, price }));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  /** 파일이 있을시 s3업로드 먼저후 url과 함께 dbUpload실행. */
  const uploadHandling = async (event) => {
    if (subject == null || price == null) {
      alert("제목과 가격은 꼭 적어주세요.");
    } else {
      if (selectedFile != null) {
        const fileUrl = setfileUrl(await uploadFile(selectedFile));
        await upload(subject, content, fileUrl, price);
        navigate("/secondhand");
      } else {
        await upload(subject, content, fileUrl, price);
        navigate("/secondhand");
      }
    }
  };

  return (
    <div className="WriteBoard">
      <MenuBar />
      <div className="WriteBoard-Container">
        <Form className="form-Container">
          <Form.Group className="form-1" controlId="formBasicEmail">
            <Form.Label className="form-1-1">제목</Form.Label>
            <Form.Control
              className="form-1-2"
              as="textarea"
              placeholder="제목을 입력해주세요"
              onChange={(e) => setSbuject(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="form-2" controlId="formBasicPassword">
            <Form.Label className="form-2-1">내용</Form.Label>
            <Form.Control
              className="form-2-2"
              as="textarea"
              placeholder="내용을 입력해주세요"
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="form-3" controlId="formBasicPassword">
            <Form.Label className="form-3-1">가격</Form.Label>
            <Form.Control
              className="form-3-2"
              as="textarea"
              placeholder="가격을 입력해주세요"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="form-4" controlId="formFile">
            <Form.Control
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </Form.Group>
          <Button variant="primary" onClick={uploadHandling}>
            글쓰기 완료
          </Button>
        </Form>
      </div>
    </div>
  );
}
