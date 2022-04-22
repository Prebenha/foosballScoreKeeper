import React from "react";
import { useTable, useSortBy } from "react-table";
import '../styles/components/scoreBoard.scss'

export const ScoreBoard = () => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Wins',
                accessor: 'wins',
            },
            {
                Header: 'Losses',
                accessor: 'losses',
            },
            {
                Header: 'ELO',
                accessor: 'ELO',
            },
            {
                Header: 'Streak',
                accessor: 'streak',
            },
            {
                Header: 'Last game',
                accessor: 'previousGame',
            },
        ],
        []
    )

    const Table = ({ columns, data }: any) => {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable(
            {
                columns,
                data,
            },
            useSortBy
        )

        // We don't want to render all 2000 rows for this example, so cap
        // it at 20 for this use case
        const firstPageRows = rows.slice(0, 20)

        return (
            <>
                <table className="scoreboard-table" {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    // Add the sorting props to control sorting. For this example
                                    // we can add them into the header props
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        {/* Add a sort direction indicator */}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 👇'
                                                    : ' 👆'
                                                : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {firstPageRows.map(
                            (row, i) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            )
                                        })}
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </table>
                <br />
            </>
        )
    }


    return (
        <>
            <h1>ScoreBoard</h1>
            <Table columns={columns} data={data} />
        </>
    )
}

const randomDate = () => {
    const startDate = new Date(2022, 0, 1);
    return new Date(startDate.getTime() + Math.random() * ((new Date).getTime() - startDate.getTime())).toDateString();
}

const data = [
    { name: 'Felipe', wins: Math.round(100 * Math.random()), losses: Math.round(100 * Math.random()), ELO: Math.round(2000 * Math.random()), streak: Math.round(20 * Math.random()), previousGame: randomDate() },
    { name: 'May Britt', wins: Math.round(100 * Math.random()), losses: Math.round(100 * Math.random()), ELO: Math.round(2000 * Math.random()), streak: Math.round(20 * Math.random()), previousGame: randomDate() },
    { name: 'Johannes', wins: Math.round(100 * Math.random()), losses: Math.round(100 * Math.random()), ELO: Math.round(2000 * Math.random()), streak: Math.round(20 * Math.random()), previousGame: randomDate() },
    { name: 'Preben', wins: Math.round(100 * Math.random()), losses: Math.round(100 * Math.random()), ELO: Math.round(2000 * Math.random()), streak: Math.round(20 * Math.random()), previousGame: randomDate() },
    { name: 'Olve', wins: Math.round(100 * Math.random()), losses: Math.round(100 * Math.random()), ELO: Math.round(2000 * Math.random()), streak: Math.round(20 * Math.random()), previousGame: randomDate() },
    { name: 'Ragnhild', wins: Math.round(100 * Math.random()), losses: Math.round(100 * Math.random()), ELO: Math.round(2000 * Math.random()), streak: Math.round(20 * Math.random()), previousGame: randomDate() },
    { name: 'Ruben', wins: Math.round(100 * Math.random()), losses: Math.round(100 * Math.random()), ELO: Math.round(2000 * Math.random()), streak: Math.round(20 * Math.random()), previousGame: randomDate() }
]

