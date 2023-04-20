import "../Scss/Components/MenuNav.scss";

import Cookies from "js-cookie";

export default function MenuNav() {
  const token = Cookies.get("token");
  const handleLogout = () => {
    if (token) {
      Cookies.remove("token");
    }
  };

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
          {!token && (
            <>
              <li>
                <a href="/signup">회원가입</a>
              </li>
              <li>
                <a href="/login">로그인</a>
              </li>
            </>
          )}
          {token && (
            <li>
              <a href="/" onClick={handleLogout}>
                로그아웃
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
