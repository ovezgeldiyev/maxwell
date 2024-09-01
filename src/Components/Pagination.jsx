import { chevronBig, chevronSmall } from "Base/SVG";
import React from "react";
import { usePagination, DOTS } from "Base/usePagination";

export default function Pagination(props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="pagination">
      <div className="pagination__info">
        <div className="pagination__info-row">
          Show
          <div className="pagination__select">
            <select name="" id="">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            {chevronSmall}
          </div>
          Entries
        </div>
        <p className="sm">1 to 10 of 430 entries</p>
      </div>
      <div className="pagination__buttons">
        <button
          type="button"
          className={
            "pagination__arrow " + (currentPage === 1 ? "disabled" : "")
          }
          onClick={onPrevious}
        >
          {chevronBig}
        </button>
        {paginationRange.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <button key={index} type="button" className="pagination__button">
                &#8230;
              </button>
            );
          }

          // Render our Page Pills
          return (
            <button
              type="button"
              key={index}
              className={
                "pagination__button " +
                (pageNumber === currentPage ? "active" : "")
              }
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          type="button"
          className={
            "pagination__arrow next " + (currentPage === lastPage ? "disabled" : "")
          }
          onClick={onNext}
        >
          {chevronBig}
        </button>
      </div>
    </div>
  );
}
