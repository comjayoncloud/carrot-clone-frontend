/** component 및 scss  */
import MenuBar from "../Components/MenuBar";
import "../Scss/Pages/Login.scss";

/** 상태관리 */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginPost } from "../Redux/Api/loginApi";

/** React Bootstrap */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Cookies from "js-cookie";

/** 페이지 이동 */
import { useNavigate } from "react-router-dom";

export default function Login() {
  const token = Cookies.get("token");
  if (token) {
    console.log("JWT Token:", token);
  } else {
    console.log("No JWT Token found");
  }

  /** id,password 상태관리 */
  const [user_id, setUserid] = useState("");
  const [user_password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user_id || !user_password) {
      alert("아이디와 비밀번호 제대로 입력해주세요");
    } else {
      try {
        await dispatch(loginPost({ user_id, user_password })).unwrap();
        alert("로그인에 성공했습니다");
        // navigate("/secondhand");
      } catch (error) {
        alert("로그인에 실패했습니다");
        console.log(error);
      }
    }
  };
  return (
    <div className="Login">
      <MenuBar />
      <div className="Login-Container">
        <div className="Logincontainer">
          <Form className="Loginform" onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="아이디"
                  value={user_id}
                  onChange={(e) => setUserid(e.target.value)}
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="비밀번호"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Form.Group>
            <div className="ButtonContainer">
              <Button
                onClick={(e) => {
                  navigate("/signup");
                }}
              >
                회원가입
              </Button>
              <Button type="submit" onClick={handleSubmit}>
                로그인
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
