import React, { SyntheticEvent } from 'react'
import DeletePotfolio from '../DeletePortfolio/DeletePotfolio';
import { Link } from 'react-router-dom';

interface Props {
    portFolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({portFolioValue, onPortfolioDelete}: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link to={`/company/${portFolioValue}/company-profile`} className="pt-6 text-xl font-bold">{portFolioValue}</Link>
      <DeletePotfolio
        portfolioValue={portFolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
    // <>
    //     <h4>{portFolioValue}</h4>
    //     <DeletePotfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portFolioValue}/>
    // </>
  )
}

export default CardPortfolio