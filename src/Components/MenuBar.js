import MenuNav from "./MenuNav";
import SearchBar from "./SearchBar";
import "../Scss/Components/MenuBar.scss";

export default function MenuBar() {
  const carrot_logo_img =
    "https://dnvefa72aowie.cloudfront.net/karrot-cs/etc/202007/0cf1d10235c37b2635c02719125da37cc1bd632518198b1e1da7f5a364156540.png";

  return (
    <div className="MenuBar">
      <div className="MenuBar-Container">
        <div className="Logo">
          <img src={carrot_logo_img} alt="당근마켓 로고" />
        </div>
        <MenuNav />
        <SearchBar />
      </div>
    </div>
  );
}
