import MenuBar from "../Components/MenuBar";
import "../Scss/Pages/WriteBoard.scss";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { uploadFile } from "../Aws/s3Upload";
import { postingPost } from "../Redux/Api/postingApi";
import { useDispatch } from "react-redux";

export default function WriteBoard() {
  /** 이미지,글 제목,글 내용 상태관리 */
  const [selectedFile, setSelectedFile] = useState(null);
  const [subject, setSbuject] = useState(null);
  const [content, setContent] = useState(null);
  const dispatch = useDispatch();

  /** 1.s3에 이미지 업로드후 받아옴. */
  const handleFileUpload = async (event) => {
    if (selectedFile != null && subject != null) {
      const fileUrl = await uploadFile(selectedFile);
      // console.log("File uploaded to:", fileUrl);
      await dbUpload(fileUrl);
    }
    await dbUpload(selectedFile);
    // alert("내용은 안적더라도 제목은 적어주세요");

    event.preventDefault();
  };
  /** 2. db upload */
  const dbUpload = async (fileUrl) => {
    try {
      console.log(fileUrl);
      await dispatch(postingPost({ subject, content, fileUrl }));
    } catch (error) {
      console.log(error);
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

          <Form.Group className="form-3" controlId="formFile">
            <Form.Control
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleFileUpload}>
            글쓰기 완료
          </Button>
        </Form>
      </div>
    </div>
  );
}
