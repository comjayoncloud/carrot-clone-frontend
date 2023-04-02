/** component 및 scss  */
import MenuBar from "../Components/MenuBar";
import "../Scss/Pages/Login.scss";

/** 상태관리 */
import React, { useState } from "react";

/** React Bootstrap */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useSelector } from "react-redux";

export default function Login() {
  const [user_id, setUserid] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  const view4 = useSelector((state) => state.view4);
  console.log(view4);

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
                type="submit"
                onClick={(e) => {
                  console.log(e);
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
