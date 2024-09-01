import { reportList } from "Base/modul";
import { chevronBig, chevronSmall } from "Base/SVG";
import Pagination from "Components/Pagination";
import React, { useMemo, useState } from "react";

export default function Table() {
  const [activeList, setActiveList] = useState(reportList);
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 5;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return activeList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, activeList]);

  return (
    <>
      <div className="table__wrapper">
        <table className="table rep">
          <thead>
            <tr>
              <th>Name</th>
              <th>File</th>
              <th>Category</th>
              <th>Author</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item, index) => {
              return <TableRow {...item} key={index} />;
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={activeList.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
const TableRow = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.file}</td>
      <td>{props.category}</td>
      <td>{props.author}</td>
      <td>
        {props.status === "sent" && <span className="green">Sent</span>}
        {props.status === "progress" && (
          <span className="orange">In Progress</span>
        )}
        {props.status === "pending" && <span className="red">Pending</span>}
      </td>
      <td>
        <a href="#">View Now</a>
      </td>
    </tr>
  );
};
