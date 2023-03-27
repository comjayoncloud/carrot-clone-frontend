import "../Scss/SecondHandPreview.scss";
import Preview from "../Components/Preview";
import Preview2 from "../Components/Preview2";
import MenuBar from "../Components/MenuBar";

import { useSelector } from "react-redux";

export default function SecondHandPreview() {
  const Preview1 = useSelector((state) => state.Preview1);
  const Preview4 = useSelector((state) => state.Preview2);
  const Preview3 = useSelector((state) => state.Preview3);
  console.log(Preview2);
  return (
    <div className="SecondHandPreview">
      <MenuBar />
      <Preview Preview={Preview1} />
      {/* <Preview2 Preview2={Preview4} /> */}
      <Preview Preview={Preview3} />
    </div>
  );
}
