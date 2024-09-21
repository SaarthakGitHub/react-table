import { useMemo } from 'react';
import { useBlockLayout, useTable } from "react-table";
import Sample_Data from './MOCK_DATA.json';
import COLUMNS from "./columns";
import './table.css';
import { Styles } from './TableStyles';
import { useSticky } from 'react-table-sticky';

const StickyColumns = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => Sample_Data, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data
    },
    useBlockLayout,
    useSticky
    )

    const firstPageRow = rows.slice(0,20);
  return (
    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRow.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  )
}

export default StickyColumns