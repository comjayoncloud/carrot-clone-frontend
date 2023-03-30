import "../Scss/Components/Preview.scss";

export default function Preview(props) {
  const a = props.view;

  return (
    <div className={`Preview${a.name}`}>
      <div className="Preview-Container">
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
        <div className="content2">
          <div>
            <img src={a.content2_src} alt="content2" />
          </div>
        </div>
      </div>
    </div>
  );
}
