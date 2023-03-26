import "../Scss/Preview.scss";

export default function Preview2() {
  const content2_src =
    "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png";
  return (
    <div className="Preview">
      <div className="Preview-Container">
        <div className="content2">
          <div>
            <img src={content2_src} alt="content2" />
          </div>
        </div>
        <div className="content1">
          <div>
            <h1>
              당신 근처의
              <br /> 당근마켓
            </h1>
            <p>
              중고 거래부터 동네 정보까지, 이웃과 함께해 <br />
              가깝고 따듯한 당신의 근처를 만들어요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
