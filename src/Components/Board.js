import "../Scss/Components/Board.scss";
import PostPreview from "./PostPreview";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import useCookieValue from "../Customhook/trackingCookie";
import { getPostDbdata } from "../Redux/Api/getPostdataApi";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch } from "react-redux";

import { Hello } from "../Components/MyPagination";
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

  /** Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil((data ? data.length : 0) / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginationBasic = (
    <Pagination>
      <Pagination.First onClick={() => handlePageChange(1)} />
      <Pagination.Prev
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
      />
      {[...Array(totalPages).keys()].map((page) => (
        <Pagination.Item
          key={page + 1}
          active={page + 1 === currentPage}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
      />
      <Pagination.Last onClick={() => handlePageChange(totalPages)} />
    </Pagination>
  );

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
            data
              .slice(indexOfFirstItem, indexOfLastItem)
              .map((data, index) => <PostPreview key={index} view={data} />)}
        </div>
        {/* Render pagination component */}
        {paginationBasic}
      </div>
    </div>
  );
}

{
  /* <Pagination>
          {[...Array(totalPages).keys()].map((page) => (
            <Pagination.Item
              key={page + 1}
              active={page + 1 === currentPage}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          ))}
        </Pagination> */
}
