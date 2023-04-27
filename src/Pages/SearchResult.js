import "../Scss/Pages/SearchResult.scss";
import MenuBar from "../Components/MenuBar";
import ListGroup from "react-bootstrap/ListGroup";
import { useLocation } from "react-router-dom";

export default function SearchResult() {
  const location = useLocation();
  const searched_data = location.state.payload.data.data;
  console.log(searched_data);
  return (
    <div className="SearchResult">
      <MenuBar />
      <ListGroup className="SearchResult-Container">
        {searched_data &&
          searched_data.map((d) => {
            return (
              <ListGroup.Item>
                <a href="/">
                  <div className="list-group-item-1">
                    <img src={d.post_img} alt="ㅎㅎ;"></img>
                  </div>
                  <div className="list-group-item-2">{d.post_subject}</div>
                  <div className="list-group-item-3">{d.post_price}</div>
                </a>
              </ListGroup.Item>
            );
          })}
        {!searched_data &&
          (() => {
            return (
              <div className="none-list">글이 없습니다.다시 검색해주세요</div>
            );
          })()}
      </ListGroup>
    </div>
  );
}
