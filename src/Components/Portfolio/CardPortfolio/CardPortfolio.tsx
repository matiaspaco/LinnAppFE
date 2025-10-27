import React, { SyntheticEvent } from 'react'
import DeletePotfolio from '../DeletePortfolio/DeletePotfolio';
import { Link } from 'react-router-dom';
import { PortfolioGet } from '../../../Models/Portfolio';

interface Props {
    portFolioValue: PortfolioGet;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({portFolioValue, onPortfolioDelete}: Props) => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-48 rounded-2xl text-white text-2xl font-semibold
                 backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg
                 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00ff7f] overflow-hidden"
    >
      {/* Efectos verdes difusos detrás */}
      <div className="absolute inset-0 bg-green-400 opacity-30 blur-3xl rounded-2xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-green-400 opacity-20 blur-[80px] rounded-2xl pointer-events-none"></div>
      {/* Contenido (encima de los fondos) */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center w-full">
        <Link
          to={`/company/${portFolioValue.symbol}/company-profile`}
          className="relative z-20 text-lg font-bold truncate"
          title={portFolioValue.symbol}
        >
          {portFolioValue.symbol}
          {/* {portFolioValue.companyName}
          {portFolioValue.industry} */}
        </Link>

        {/* subtítulo opcional si quisieras poner algo debajo */}
        {/* <span className="text-sm mt-1 text-white/80">Ticker • USD</span> */}
      </div>

      {/* Botón de eliminar en la esquina inferior (ocupa todo el ancho en mobile si prefieres) */}
      <div className="absolute left-4 right-4 bottom-4 z-20">
        {/* DeletePotfolio mantiene la misma API; le pasamos una clase para que ocupe menos espacio visual si quieres */}
        <DeletePotfolio
          portfolioValue={portFolioValue.symbol}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
    </div>


    // {<div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
    //   <Link to={`/company/${portFolioValue.symbol}/company-profile`} className="pt-6 text-xl font-bold">{portFolioValue.symbol}</Link>
    //   <DeletePotfolio
    //     portfolioValue={portFolioValue.symbol  }
    //     onPortfolioDelete={onPortfolioDelete}
    //   />
    // </div>}

    // <>
    //     <h4>{portFolioValue}</h4>
    //     <DeletePotfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portFolioValue}/>
    // </>
  )
}

export default CardPortfolio