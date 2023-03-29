import "../Scss/Pages/SecondHandPreview.scss";
import Preview from "../Components/Preview";
import Preview2 from "../Components/Preview2";
import MenuBar from "../Components/MenuBar";
import NavFooter from "../Components/NavFooter";
import RootFooter from "../Components/RootFooter";
import { useSelector } from "react-redux";

export default function SecondHandPreview() {
  const view1 = useSelector((state) => state.view1);
  const view2 = useSelector((state) => state.view2);
  const view3 = useSelector((state) => state.view3);
  const view4 = useSelector((state) => state.view4);
  return (
    <div className="SecondHandPreview">
      <MenuBar />
      <Preview view={view1} />
      <Preview2 view={view2} />
      <Preview view={view3} />
      <Preview2 view={view4} />
      <NavFooter />
      <RootFooter />
    </div>
  );
}
