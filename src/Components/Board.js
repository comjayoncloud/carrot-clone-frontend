import "../Scss/Components/Board.scss";
import PostPreview from "./PostPreview";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import useCookieValue from "../Customhook/trackingCookie";
import { getPostDbdata } from "../Redux/Api/getPostdataApi";

import { useDispatch } from "react-redux";
export default function Board() {
  const navigate = useNavigate();

  /** token check */
  const token = Cookies.get("token");
  const [isToken, setIsToken] = useState(false);
  useEffect(() => {
    setIsToken(token !== undefined);
  }, [token]);

  /** cookie check */
  const cookieValue = useCookieValue("token", 1000 * 60000);
  useEffect(() => {
    if (cookieValue === undefined) {
      alert("중고거래 매물 페이지를 이용하려면 로그인을 해주세요");
      navigate("/");
    }
  });

  /** get post data */
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  useEffect(() => {
    console.log("board의 useEffect called");
    const fetchData = async () => {
      const resultAction = await dispatch(getPostDbdata());
      const resultData = resultAction.payload;
      setData(resultData);
    };

    fetchData();
  }, [dispatch]);
  const a = console.log("ㅎㅇ");
  /** img == post_img , price == post_pirce , sbuject == post_subject */
  return (
    <div className="Board">
      <div className="Board-Container">
        <div className="content1"> 중고거래 매물</div>
        {isToken && (
          <div>
            <button
              onClick={() => {
                navigate("/secondHand/writeboard");
              }}
            >
              글쓰기
            </button>
          </div>
        )}
        <div className="content2">
          {data &&
            data.map((data, index) => <PostPreview key={index} view={data} />)}
          {a}
        </div>
      </div>
    </div>
  );
}
