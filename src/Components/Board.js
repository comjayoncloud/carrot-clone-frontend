import "../Scss/Components/Board.scss";
import PostPreview from "./PostPreview";

import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import useCookieValue from "../Customhook/trackingCookie";

export default function Board() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [isToken, setIsToken] = useState(false);
  const cookieValue = useCookieValue("token", 1000 * 600);

  useEffect(() => {
    setIsToken(token !== undefined);
  }, [token]);

  useEffect(() => {
    if (cookieValue === undefined) {
      alert("글쓰기 기능을 사용하려면 다시 로그인해주세요");
      navigate("/");
    }
  });

  const a = {
    img: "https://dnvefa72aowie.cloudfront.net/origin/article/202303/753695579fb1e25ac280f3174e4b513c978f3127df6a3bc9e8463aaae836e7ba.jpg?q=82&s=300x300&t=crop",
    subject: "컴퓨터",
    price: "10,000원",
    view: "32",
  };

  const b = {
    img: "https://dnvefa72aowie.cloudfront.net/origin/article/202303/7c0a3c3645abc9f767d9b437449edff4d0e1aa472b1483c45b26d01d93c3965d.jpg?q=82&s=300x300&t=crop",
    subject: "아이폰14pro",
    price: "100,000",
    view: "62",
  };
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
          <PostPreview view={a} />
          <PostPreview view={b} />
          <PostPreview view={a} />
          <PostPreview view={b} />
          <PostPreview view={a} />
          <PostPreview view={b} />
          <PostPreview view={a} />
          <PostPreview view={b} />
        </div>
      </div>
    </div>
  );
}

// const [isAuthenticated, setIsAuthenticated] = useState(!!token);
// useEffect(() => {
//   function onCookieChange() {
//     const jwt = Cookies.get("token");
//     console.log(jwt);
//     setIsAuthenticated(!!jwt);
//   }

//   window.addEventListener("storage", onCookieChange);
//   return () => {
//     window.removeEventListener("storage", onCookieChange);
//   };
// }, [token]);
