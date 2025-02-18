import React, { SyntheticEvent } from 'react'
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : JSX.Element => {
  return (
    // <div className="card">
    //     {/* <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=560" alt="Image" /> */}
    //     <img src="" alt="Company logo" />
    //     <div className="details">
    //     <h2> 
    //       {searchResult.name} ({searchResult.symbol})
    //     </h2>
    //     <p>${searchResult.currency}</p>
    // </div>
    // <p className="information">
    //   {searchResult.exchangeShortName} - {searchResult.stockExchange}
    // </p>
    // <AddPortfolio 
    //   onPortfolioCreate={onPortfolioCreate} 
    //   symbol={searchResult.symbol}
    // />
    // </div>
  <div
    className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
    key={id}
    id={id}
  >
    <Link to={`/Company/${searchResult.symbol}/company-profile`} className="font-bold text-center text-black md:text-left">
      {searchResult.name} ({searchResult.symbol})
    </Link>
    <p className="text-black">{searchResult.currency}</p>
    <p className="font-bold text-black">
      {searchResult.exchangeShortName} - {searchResult.stockExchange}
    </p>
    <AddPortfolio
      onPortfolioCreate={onPortfolioCreate}
      symbol={searchResult.symbol}
    />
  </div>
  )
}

export default Card