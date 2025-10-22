import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company';
import { getCompanyProfile, getKeyMetrics } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashBoard from '../../Components/CompanyDashboard/CompanyDashBoard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';
import TenKFinder from '../../Components/TenKFinder/TenKFinder';

interface Props {}

const CompanyPage = (props: Props) => {
  let {ticker} = useParams();
  const[company, setCompany] = useState<CompanyProfile>();
  const[hasKeymetrics, setHasKeyMetrics] = useState<boolean | null>(null);

  useEffect(() => {
    const getProfileInit = async() => {
        const result = await getCompanyProfile(ticker!);
        setCompany(result?.data[0]);

        try {
          const km = await getKeyMetrics(ticker!);
          // si la API devuelve datos válidos, habilitamos
          if (km?.data && km.data.length > 0) {
            setHasKeyMetrics(true);
          } else {
            // si no hay data, lo tratamos como "requiere premium"
            setHasKeyMetrics(false);
          }
        } catch (err: any) {
          // si el endpoint responde con 402 lo detectamos aquí
          if (err?.response?.status === 402) {
            setHasKeyMetrics(false);
          } else {
            // error de red u otro -> por seguridad lo dejamos como "no disponible"
            console.error("getKeyMetrics error:", err);
            setHasKeyMetrics(false);
          }
        }
    }




    getProfileInit();
  }, [])

//const disabledClass = !isPremium ? "pointer-events-none opacity-50" : "";
//${disabledClass}

  return (
    <>
    {
    company ? 
    // (<div>{company.companyName}</div>) 
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

        <Sidebar hasKeyMetrics={hasKeymetrics}></Sidebar>

        <CompanyDashBoard ticker={ticker!}>
            <Tile Title="Company Name" SubTitle={company.companyName}></Tile>
            <Tile Title="Price" SubTitle={company.price.toString()}></Tile>
            <Tile Title="Sector" SubTitle={company.sector}></Tile>
            {/* <Tile Title="DCF" SubTitle={company.dcf.toString()}></Tile> */}
            <Tile Title="Market Cap" SubTitle={company.marketCap.toString()}></Tile>
            {/* <CompFinder ticker={company.symbol}/> */}
            <TenKFinder ticker={company.symbol}/>

            {/* <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4"> */}
            <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4 whitespace-normal break-words max-w-full overflow-x-auto">
              {company.description}
            </p>
        </CompanyDashBoard>

    </div>
    : 
    (    <Spinner/>)}
    </>
  )
};

export default CompanyPage