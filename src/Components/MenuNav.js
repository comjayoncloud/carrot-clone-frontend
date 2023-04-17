import "../Scss/Components/MenuNav.scss";

export default function MenuNav() {
  return (
    <div className="MenuNav">
      <nav className="MenuNav-Container">
        <ul>
          <li>
            <a href="/">중고거래</a>
          </li>
          <li>
            <a href="/secondhand">중고거래매물</a>
          </li>
          <li>
            <a href="/signup">회원가입</a>
          </li>
          <li>
            <a href="/login">로그인</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
