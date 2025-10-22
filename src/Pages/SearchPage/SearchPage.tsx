import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import Search2 from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';

interface Props {}

const SearchPage = (props: Props) => {

      const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
      const [search, setSearch] = useState<string>("");
      const [searchResult, setSearchResult] = useState <CompanySearch[]>([]);
      const [serverError, setServerError] = useState<string | null>(null);
    
      const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
      }
    //#region Create section
      const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        const exist = portfolioValues.find((value) => value === e.target[0].value);
        if (exist) {
          return;
        }
        const updatePortfolio = [...portfolioValues, e.target[0].value]
        setPortfolioValues(updatePortfolio);
      }
      //Flujo de onPortfolioCreate el mismo se ejecuta cuando se hace click en el "ADD" button ya que el onsubmit=onPortfolioCreate se encuentra en el componente hijo
      //si tiene parametros que se envian hasta el SearchPage.tsx los mismos pueden estar declarados como hooks es decir estados si viene desde el componente hijo se
      //captura el estado en PortfolioValues sino el estado inicial es vacio, despues de esto se acciona la logica asociada al evento que viene del componente hijo
      //es decir 'const onPortfolioCreate = (e: any) => {....' donde en la linea 31 se actualiza el estado de PortfolioValues y este cambio acciona el componente 
      // ListPortfolio pasandole como parametro el estado actualizado y renderizando el componente. Tambien se re renderiza el componente cuando se acciona el evento
      //asociado del componente hijo.
    //#endregion
    
    //#region delete Section
    const onPortFolioDelete = (e: any) => {
      e.preventDefault();
      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value;
      });
      setPortfolioValues(removed);
    }
    //#endregion
    
    
    
      const onSearchSubmit = async(e: SyntheticEvent) => {
        e.preventDefault()
        const result = await searchCompanies(search);
        if (typeof result === "string") {
          setServerError(result);
        }else if (Array.isArray(result.data)) {
          setSearchResult(result.data)
        }
        console.log(searchResult);
      };
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Hero/> */}
      <Search2 onSearchSubmit={onSearchSubmit} 
      search={search} 
      handleSearchChange={handleSearchChange}/>

      {serverError && <h1>{serverError}</h1>}

      <ListPortfolio portFolioValues = {portfolioValues} 
      onPortfolioDelete = {onPortFolioDelete}/>

     <CardList searchResults={searchResult} 
     onPortfolioCreate={onPortfolioCreate}/>
    </div>
  )
}

export default SearchPage