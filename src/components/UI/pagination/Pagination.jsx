import React from "react";
import { getPagesArray } from "../../utils/pages";
// import classes from "./Pagination.module.css";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="page center">
      {pagesArray.map((pageNumber) => (
        <span
          key={pageNumber}
          onClick={() => changePage(pageNumber)}
          className={
            page === pageNumber ? "page__item  page_item-current" : "page__item"
          }
        >
          {pageNumber}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
