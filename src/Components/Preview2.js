import "../Scss/Preview.scss";
import { useSelector } from "react-redux";

export default function Preview2(props) {
  //   const a = props.Preview2;
  console.log(props);
  const a = useSelector((state) => state.Preview2);

  return (
    <div className="Preview">
      <div className="Preview-Container">
        <div className="content2">
          <div>
            <img src={a.content2_src} alt="content2" />
          </div>
        </div>
        <div className="content1">
          <div>
            <h1>
              {a.content1_text1}
              <br /> {a.content1_text2}
            </h1>
            <p>
              {a.content2_text1} <br />
              {a.content2_text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
