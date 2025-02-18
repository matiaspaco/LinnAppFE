import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { testIncomeStatementData } from '../../Components/Table/TestData';

type Props = {}

const tableConfig = [
    {
      label: "Market Cap",
      render: (company: any) => company.marketCapTTM,
      subTitle: "Total value of all a company's shares of stock",
    },
]

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>FinShar Design Page</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a, 
        fuga voluptate qui itaque optio officia reprehenderit fugi.
    </h2>
    <RatioList data={testIncomeStatementData} config={tableConfig}></RatioList>
    <Table data={testIncomeStatementData} config={tableConfig}/>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae dolore 
      numquam earum officia at similique ratione, iure quos dignissimos dolores eaque 
      voluptatum minima nihil explicabo, non, labore quasi distinctio.
    </h3>
    </>
  )
}

export default DesignPage