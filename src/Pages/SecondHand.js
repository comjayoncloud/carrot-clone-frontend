import "../Scss/Pages/SecondHand.scss";
import MenuBar from "../Components/MenuBar";
import Board from "../Components/Board";
export default function SecondHand() {
  console.log("secondHand called");
  return (
    <div className="SecondHand">
      <MenuBar />
      <Board />
    </div>
  );
}
