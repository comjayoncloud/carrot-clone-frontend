import { useState, useEffect } from "react";
import cookie from "js-cookie";

export default function useCookieValue(cookieName, intervalTime) {
  const [cookieValue, setCookieValue] = useState(cookie.get(cookieName));

  useEffect(() => {
    function checkCookieValue() {
      //   console.log("checkCookieValue 함수 실행!");
      const value = cookie.get(cookieName);
      console.log(value);

      if (value !== cookieValue) {
        setCookieValue(value);
      }
    }

    const intervalId = setInterval(() => {
      checkCookieValue();
    }, intervalTime);

    // Clean up
    return () => {
      clearInterval(intervalId);
    };
  }, [cookieName, cookieValue, intervalTime]);

  return cookieValue;
}
