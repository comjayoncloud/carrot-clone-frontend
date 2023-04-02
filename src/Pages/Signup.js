import "../Scss/Pages/Signup.scss";
import MenuBar from "../Components/MenuBar";

/** React Bootstrap */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

/** 상태관리 */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupPost } from "../Redux/Api/signupApi";

/** 페이지이동을 위한 useNavigate*/
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const logo =
    "https://dnvefa72aowie.cloudfront.net/karrot-cs/etc/202007/0cf1d10235c37b2635c02719125da37cc1bd632518198b1e1da7f5a364156540.png";

  /** 상태관리 id,password,nickname */
  const [user_id, setId] = useState("");
  const [user_password, setPassword] = useState("");
  const [user_nickname, setNickname] = useState("");

  /** redux */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user_id || !user_password || !user_nickname) {
      alert("제대로 입력해주세요");
    } else {
      try {
        await dispatch(signupPost({ user_id, user_password, user_nickname }));
        alert("회원가입 성공!");
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="Signup">
      <MenuBar />
      <div className="Signup-container">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Form className="signupform" onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label>아이디</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  value={user_id}
                  onChange={(e) => setId(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label>비밀번호</Form.Label>

              <Col sm={10}>
                <Form.Control
                  type="text"
                  value={user_password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label>닉네임</Form.Label>

              <Col sm={10}>
                <Form.Control
                  type="text"
                  value={user_nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </Col>
            </Form.Group>
            <div className="ButtonContainer">
              <Button type="submit" onClick={handleSubmit}>
                가입하기
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
