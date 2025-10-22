import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet, CompanyKeyMetrics } from '../../company';
import { useOutletContext } from 'react-router';
import { getKeyMetrics } from '../../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';

type Props = {}

const tableConfig = [
    {
      label: "Market Cap",
      render: (company: CompanyKeyMetrics) => company.marketCap,
      subTitle: "Total value of all a company's shares of stock",
    },
    {
      label: "Current Ratio",
      render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
      subTitle:
        "Measures the companies ability to pay short term debt obligations",
    },
    {
      label: "Return On Equity",
      render: (company: CompanyKeyMetrics) => company.returnOnEquityTTM,
      subTitle:
        "Return on equity is the measure of a company's net income divided by its shareholder's equity",
    },
    {
      label: "Return On Assets",
      render: (company: CompanyKeyMetrics) => company.returnOnTangibleAssetsTTM,
      subTitle:
        "Return on assets is the measure of how effective a company is using its assets",
    },
    {
      label: "Free Cashflow Per Share",
      render: (company: CompanyKeyMetrics) => company.freeCashFlowToEquityTTM,
      subTitle:
        "Return on assets is the measure of how effective a company is using its assets",
    },
    {
      label: "Net Current Asset Value TTM",
      render: (company: CompanyKeyMetrics) => company.netCurrentAssetValueTTM,
      subTitle:
        "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
    },
    {
      label: "Earnings Yield TTM",
      render: (company: CompanyKeyMetrics) => company.earningsYieldTTM,
      subTitle: "Shows percentage of earnings in relation to share price",
    },
    {
      label: "Capex To Operateing Cash Flow",
      render: (company: CompanyKeyMetrics) => company.capexToOperatingCashFlowTTM,
      subTitle:
        "Capex is used by a company to aquire, upgrade, and maintain physical assets",
    },
    {
      label: "Graham Number",
      render: (company: CompanyKeyMetrics) => company.grahamNumberTTM,
      subTitle:
        "This is the upperbouind of the price range that a defensive investor should pay for a stock",
    },
    {
      label: "PE Ratio",
      render: (company: CompanyKeyMetrics) => 1 / company.earningsYieldTTM,
      subTitle:
        "Shows how many times the stock price is relative to earnings per share",
    },
  ];
  
  

const CompanyProfile = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
    useEffect(() => {
        const getCompanyKeyMetrics = async () => {
          const value = await getKeyMetrics(ticker);
          setCompanyData(value?.data[0]);
        }
        getCompanyKeyMetrics();
    }, []);
  return (
    <>
      { companyData === undefined ? (
        <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6  text-sm text-yellow-800 rounded-lg bg-yellow-50 border border-yellow-300"
        >
          🔒 This <strong>Key Metrics </strong> information is only available in the <strong>Premium</strong> Financial Modeling Prep plan.
        </div>
      ) : companyData ? (
        <>
        <RatioList config={tableConfig} data={companyData}/>
        </>
      ) : (
        <Spinner/>
      )}
    </>
  )
}

export default CompanyProfile