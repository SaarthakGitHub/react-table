import React, { useMemo } from 'react';
import { useTable, useColumnOrder } from "react-table";
import Sample_Data from './MOCK_DATA.json';
import COLUMNS from "./columns";
import './table.css';

const ColumnOrdering = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => Sample_Data, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setColumnOrder,
    } = useTable({
        columns,
        data
    },
        useColumnOrder
    )

    const handleColumnOrder = () => {
        setColumnOrder(['id', 'first_name', 'last_name', 'phone', 'date_of_birth', 'country'])
    }

  return (
    <>
    <button onClick={handleColumnOrder}>Change Column Order</button>
    <table {...getTableProps()}>
        <thead>
        {
            headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} >
                    { headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
                </tr>
            ))
        }
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => { prepareRow(row)
        return (
            <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
            </tr>
        )})}
        </tbody>
    </table>
    </>
  )
}

export default ColumnOrdering