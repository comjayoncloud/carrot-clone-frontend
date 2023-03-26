import "../Scss/SecondHandPreview.scss";
import MenuBar from "../Components/MenuBar";
import Preview from "../Components/Preview";
import Preview2 from "../Components/Preview2";

export default function SecondHandPreview() {
  return (
    <div className="SecondHandPreview">
      <MenuBar />
      <Preview />
      <Preview2 />
    </div>
  );
}
