import "../Scss/Components/NavFooter.scss";
import MenuNav from "./MenuNav";
export default function NavFooter() {
  return (
    <div className="NavFooter">
      <div className="NavFooter-Container">
        <div className="Content1">
          <MenuNav />
          <div>
            <nav>
              <ul>
                <li>
                  <a href="localhhost">당근비지니스</a>
                </li>
                <li>
                  <a href="localhhost">채팅하기</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <a href="localhhost">자주 묻는질문</a>
                </li>
                <li>
                  <a href="localhhost">회사소개</a>
                </li>
                <li>
                  <a href="localhhost">인재 채용</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="Content2">
          <div className="p-container">
            <p>당근 마켓 앱 다운로드</p>
          </div>
          <div className="img-container">
            <div>
              <img
                src="https://www.vectorlogo.zone/logos/apple_appstore/apple_appstore-ar21.svg"
                alt="apple_store"
              />
            </div>
            <div>
              <img
                src="https://www.vectorlogo.zone/logos/google_play/google_play-ar21.svg"
                alt="google_play"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
