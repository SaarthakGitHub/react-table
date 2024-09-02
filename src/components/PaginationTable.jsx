import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import Sample_Data from "./MOCK_DATA.json";
import COLUMNS from "./columns";
import "./table.css";

const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Sample_Data, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {pageIndex: 4}
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
          <span>
            Page {pageIndex+1} of {pageOptions.length} 
          </span>
          <span>
            | GoTo Page : 
            <input type='number' defaultValue={pageIndex+1} onChange={(e) => gotoPage(e.target.value ? Number(e.target.value)-1 : 0)} />
          </span>
          <span>
          <select onChange={e => setPageSize(Number(e.target.value))}>
            {
                [10,50,100].map(value => (
                    <option value={value}>
                        Show {value}
                    </option>
                ))
            }
            </select>
          </span>
          &nbsp;
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
    </>
  );
};

export default PaginationTable;
