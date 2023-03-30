import "../Scss/Components/PostPreview.scss";
import Nav from "react-bootstrap/Nav";

export default function PostPreview(props) {
  const view = props.view;
  return (
    <div className="PostPreview">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/signup">
            <div>
              <div className="postimg">
                <img src={view.img} alt="사진" />
              </div>
              <div className="postinfo">
                <div className={"subject"}>{view.subject}</div>
                <div className="price">{view.price}</div>
                <div className="view">{view.view}</div>
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
