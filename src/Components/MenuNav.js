import "../Scss/Components/MenuNav.scss";

export default function MenuNav() {
  return (
    <div className="MenuNav">
      <nav className="MenuNav-Container">
        <ul>
          <li>
            <a href="localhost">중고거래</a>
          </li>
          <li>
            <a href="localhost">동네가게</a>
          </li>
          <li>
            <a href="localhost">알바</a>
          </li>
          <li>
            <a href="localhost">부동산 직거래</a>
          </li>
          <li>
            <a href="localhost">중고차 직거래</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
