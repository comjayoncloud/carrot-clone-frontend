import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Scss/Components/SearchBar.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGet } from "../Redux/Api/searchApi";

import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const form_placeholder = "물품이나 동네를 검색해보세요";
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await dispatch(searchGet(content));
    navigate("/secondhand/searchresult", { state: data });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-Container">
        <Form className="SearchForm" onSubmit={handleSearch}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder={form_placeholder}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="click" onClick={handleSearch}>
            검색하기
          </Button>
        </Form>
      </div>
    </div>
  );
}
