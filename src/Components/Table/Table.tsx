import React from 'react'
import { testIncomeStatementData } from './TestData';
import { render } from '@testing-library/react';

const data = testIncomeStatementData;

interface Props {
    config: any,
    data: any
}

//type Company = (typeof data)[0];//Esto solo se usa para usos de prueba no es buena practica

// const configs = [
//     {
//         label: "Year",
//         render: (x: Company) => x.acceptedDate
//     },
//     {
//         label: "Cost of revenue",
//         render: (company:Company) => company.costOfRevenue
//     }
// ]

const Table = ({config, data}: Props) => {
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val: any) => {
                    return <td className="p-3">{val.render(company)}</td>
                })}

                {/* {configs.map((val:any) => {
                    return  (<td className="p-4 whitespace-nowrap text-sm front-normal text-gray-900">{val.render(company)}</td>)
                        // <td className="p-3">
                        //     {val.render(company)}
                        // </td>
                    
                })}                 */}
            </tr>
          );
    });

    const renderedHeaders = config.map((config: any) => {
        return(
            <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" key={config.label}>
                {config.label}
            </th>
        )
    })
    return (
            // <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 m-5">
                    <thead className="bg-gray-50">{renderedHeaders}</thead>
                    <tbody>{renderedRows}</tbody>
                </table>
            </div>
    )
}

export default Table