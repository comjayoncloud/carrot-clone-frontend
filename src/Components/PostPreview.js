import "../Scss/Components/PostPreview.scss";
import Nav from "react-bootstrap/Nav";

export default function PostPreview(props) {
  const view = props.view;
  return (
    <div className="PostPreview">
      <Nav>
        <Nav.Item>
          <Nav.Link href="/secondhand">
            <div className="postimg">
              <img src={view.post_img} alt="사진" />
            </div>
            <div className="postinfo">
              <div className="subject">{view.post_subject}</div>
              <div className="price">{view.post_price}</div>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
