import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  currentPage: number;
}

const StyledPaginaton = styled.div`
  display: flex;
  justify-content: center;
  button {
    padding: 12px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    outline: none;
    border: 1px solid #ccc;
    margin-left: 10px;
    cursor: pointer;
    &.active {
      background-color: #000;
      color: #fff;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Pagination: React.FC<Props> = (props: Props) => {
  const { currentPage } = props;
  const navigate = useNavigate();
  return (
    <StyledPaginaton>
      <button
        className="prev-page"
        disabled={currentPage === 1 ? true : false}
        onClick={() => {
          navigate(`/?p=${currentPage - 1}&l=10`);
        }}
      >
        {"<"}
      </button>
      {new Array(5).fill(0).map((item, index) => {
        if (currentPage < 3) {
          return (
            <Link
              key={index}
              to={`/?p=${currentPage - (currentPage - 1) + index}&l=10`}
            >
              <button
                className={
                  currentPage === currentPage - (currentPage - 1) + index
                    ? "active"
                    : ""
                }
              >
                {currentPage - (currentPage - 1) + index}
              </button>
            </Link>
          );
        } else if (currentPage + 2 <= 10) {
          return (
            <Link key={index} to={`/?p=${currentPage - 2 + index}&l=10`}>
              <button
                className={
                  currentPage === index + currentPage - 2 ? "active" : ""
                }
              >
                {currentPage - 2 + index}
              </button>
            </Link>
          );
        } else if (currentPage + 2 > 10) {
          return (
            <Link
              key={index}
              to={`/?p=${
                currentPage - 2 - (currentPage + 2 - 10) + index
              }&l=10`}
            >
              <button
                className={
                  currentPage ===
                  currentPage - 2 - (currentPage + 2 - 10) + index
                    ? "active"
                    : ""
                }
              >
                {currentPage - 2 - (currentPage + 2 - 10) + index}
              </button>
            </Link>
          );
        }
      })}
      <button
        className="next-page"
        disabled={currentPage === 10 ? true : false}
        onClick={() => {
          navigate(`/?p=${currentPage + 1}&l=10`);
        }}
      >
        {">"}
      </button>
    </StyledPaginaton>
  );
};

export default Pagination;
