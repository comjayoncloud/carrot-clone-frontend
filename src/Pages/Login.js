import MenuBar from "../Components/MenuBar";
import "../Scss/Pages/Login.scss";

/** React Bootstrap */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }
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
                <Form.Control type="text" placeholder="아이디" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Col sm={10}>
                <Form.Control type="password" placeholder="비밀번호" />
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
              <Button
                type="submit"
                onClick={(e) => {
                  console.log(e);
                }}
              >
                로그인
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
