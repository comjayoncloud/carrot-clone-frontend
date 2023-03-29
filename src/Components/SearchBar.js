import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Scss/Components/SearchBar.scss";

export default function SearchBar() {
  const form_placeholder = "물품이나 동네를 검색해보세요";
  return (
    <div className="SearchBar">
      <div className="SearchBar-Container">
        <Form className="SearchForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder={form_placeholder} />
          </Form.Group>
          <Button variant="primary" type="submit">
            검색하기
          </Button>
        </Form>
      </div>
    </div>
  );
}
