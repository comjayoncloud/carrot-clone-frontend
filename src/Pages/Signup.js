import "../Scss/Pages/Signup.scss";
import MenuBar from "../Components/MenuBar";

/** React Bootstrap */
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Signup() {
  const logo =
    "https://dnvefa72aowie.cloudfront.net/karrot-cs/etc/202007/0cf1d10235c37b2635c02719125da37cc1bd632518198b1e1da7f5a364156540.png";

  return (
    <div className="Signup">
      <MenuBar />
      <div className="Signup-container">
        <div className="content">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <Form className="signupform">
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label>아이디</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label>비밀번호</Form.Label>

              <Col sm={10}>
                <Form.Control type="password" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label>닉네임</Form.Label>

              <Col sm={10}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <div className="ButtonContainer">
              <Button
                type="submit"
                onClick={(e) => {
                  console.log(e);
                }}
              >
                가입하기
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
