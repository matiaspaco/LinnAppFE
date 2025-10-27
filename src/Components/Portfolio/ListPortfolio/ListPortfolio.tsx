import React, {SyntheticEvent} from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { PortfolioGet } from '../../../Models/Portfolio';

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portFolioValues: PortfolioGet[];
}

const ListPortfolio = ({portFolioValues, onPortfolioDelete}: Props) => {
  return (
    // <>
    // <h3>My Portfolio</h3>
    // <ul>
    //     {portFolioValues && portFolioValues.map((portFolioValueX, index) => {
    //         return <CardPortfolio key={index} portFolioValue={portFolioValueX} onPortfolioDelete={onPortfolioDelete}/>
    //     })}
    // </ul>
    // </>
    <section id="portfolio">
    <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
      My Portfolio
    </h2>
    <div className="max-w-6xl mx-auto p-4 md:p-8">
        {portFolioValues.length > 0 ? (
          // Grid: responsive, hasta 5 columnas en pantallas grandes.
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {portFolioValues.map((portfolioValue, index) => {
              return (
                <CardPortfolio
                  key={`${portfolioValue}-${index}`}
                  portFolioValue={portfolioValue}
                  onPortfolioDelete={onPortfolioDelete}
                />
              );
            })}
          </div>
        ) : (
          <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
            Your portfolio is empty.
          </h3>
        )}
    </div>

    {/* <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
      <>
        {portFolioValues.length > 0 ? (
          portFolioValues.map((portfolioValue) => {
            return (
              <CardPortfolio
                portFolioValue={portfolioValue}
                onPortfolioDelete={onPortfolioDelete}
              />
            );
          })
        ) : (
          <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
            Your portfolio is empty.
          </h3>
        )}
      </>
    </div> */}
  </section>
  )
}

export default ListPortfolio