import { tableList } from "Base/modul";
import { dragIcon } from "Base/SVG";
import Pagination from "Components/Pagination";
import React, { useMemo, useState } from "react";

export default function Table() {
  const [activeList, setActiveList] = useState(tableList);
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
        <table className="table">
          <thead>
            <tr>
              <th>Alarm Name</th>
              <th>Alarm Status</th>
              <th>Area</th>
              <th>Severity</th>
              <th>Date</th>
              <th>Time</th>
              <th>% Started</th>
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
      <td>
        <button className="table__button">{dragIcon}</button>
        <span>{props.name}</span>
      </td>
      <td>{props.status}</td>
      <td>
        <span>{props.area}</span>
      </td>
      <td>
        <span>{props.severity}</span>
      </td>
      <td>{props.date}</td>
      <td>{props.time}</td>
      <td>
        <span>{props.started}</span>
      </td>
    </tr>
  );
};
