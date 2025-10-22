import React, { SyntheticEvent, useEffect, useState } from 'react'
import { CompanyProfile, CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';
import { Link } from 'react-router-dom';

import { Label } from "../../Components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../Components/ui/radio-group";
import { useId } from "react";
import { getCompanyProfile } from '../../api';


import { motion} from "framer-motion";

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}


const Card: React.FC<Props> = ({id, searchResult, onPortfolioCreate}: Props) : JSX.Element => {
    const[company2, setCompany2] = useState<CompanyProfile>();
    useEffect(() => {
      const getProfileInit = async() => {
          const result = await getCompanyProfile(searchResult.symbol);
          setCompany2(result?.data[0]);
      };
      getProfileInit();
      }, []);

  return (
    <>
    {/* <div class="framer-11fruo1" data-border="true" style="--border-bottom-width:1px;--border-color:rgba(0, 240, 104, 0.6);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background:radial-gradient(56.699999999999996% 100% at 50% 100%, rgba(0, 168, 73, 0.6) 0%, rgba(0, 166, 72, 0.57903) 0%, rgba(0, 113, 49, 0.2) 71.56526913365819%, rgba(0, 0, 0, 0) 100%);border-bottom-left-radius:16px;border-bottom-right-radius:16px;border-top-left-radius:16px;border-top-right-radius:16px"></div> */}
    {/* background-color: rgba(217, 217, 217, 0.1); border-radius: 16px; opacity: 1; */}
    {/* border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 */}
    {/* --border-bottom-width:1px;--border-color:rgba(0, 240, 104, 0.6);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background:radial-gradient(56.699999999999996% 100% at 50% 100%, rgba(0, 168, 73, 0.6) 0%, rgba(0, 166, 72, 0.57903) 0%, rgba(0, 113, 49, 0.2) 71.56526913365819%, rgba(0, 0, 0, 0) 100%);border-bottom-left-radius:16px;border-bottom-right-radius:16px;border-top-left-radius:16px;border-top-right-radius:16px */}
    {/* <RadioGroup className="gap-2 w-full max-w-[90%] mx-auto px-[10%] md:px-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" defaultValue="1"> */}
    {/* <RadioGroup className="gap-2 w-full max-w-[90%] mx-auto px-[10%] md:px-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 filter:drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.25));-webkit-filter:drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.25));transform:translateX(-50%)" defaultValue="1">
      <div key={id} id={id} className="border-input has-data-[state=checked]:border-ring/40 relative flex w-full items-start gap-2 rounded-lg border p-4 shadow-xs mb-2">
        <div className="flex grow items-start gap-3">
          {company2?.image && company2.defaultImage == false ? <img src={`${company2?.image}`} alt="Company Logo" className="shrink-0 w-8 h-7" /> :           <svg
            className="shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="16" fill="#121212" />
            <g clipPath="url(#sb-a)">
              <path
                fill="url(#sb-b)"
                d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
              />
              <path
                fill="url(#sb-c)"
                fillOpacity=".2"
                d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z"
              />
              <path
                fill="#3ECF8E"
                d="M14.375 6.367c.506-.638 1.532-.289 1.544.525l.078 11.903H8.094c-1.45 0-2.258-1.674-1.357-2.81l7.638-9.618Z"
              />
            </g>
            <defs>
              <linearGradient
                id="sb-b"
                x1="15.907"
                x2="23.02"
                y1="15.73"
                y2="18.713"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#249361" />
                <stop offset="1" stopColor="#3ECF8E" />
              </linearGradient>
              <linearGradient
                id="sb-c"
                x1="12.753"
                x2="15.997"
                y1="11.412"
                y2="17.519"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
              <clipPath id="sb-a">
                <path fill="#fff" d="M6.354 6h19.292v20H6.354z" />
              </clipPath>
            </defs>
          </svg>}
          <div className="grid grow gap-2">
            <Label>
                {searchResult.name}
              <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
               {"  "} ({searchResult.symbol}) • {searchResult.currency}
              </span>
            </Label>
            <p id={`${id}-1-description`} className="text-muted-foreground text-xs">
            {searchResult.exchangeShortName} - {searchResult.stockExchange}              
            </p>            
          </div>
        </div>
        <AddPortfolio 
                    onPortfolioCreate={onPortfolioCreate} 
                    symbol={searchResult.symbol} 
                />
      </div>
    </RadioGroup> */}

    
    {/* <RadioGroup
      className="gap-2 w-full max-w-[90%] mx-auto px-[10%] md:px-0 bg-black/60 
                 backdrop-blur-md supports-[backdrop-filter]:bg-black/40 
                 shadow-[0_0_15px_#00E6FF] rounded-lg p-4"
      defaultValue="1"
    >
      <motion.div
        key={id}
        id={id}
        whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px #00E6FF" }}
        className="border-2 border-cyan-400 relative flex w-full items-start gap-3 rounded-lg 
                   p-4 shadow-[0_0_10px_#00E6FF] transition-all duration-300 
                   bg-black/50 backdrop-blur-lg"
      >

        <div className="flex items-center">
          {company2?.image && !company2.defaultImage ? (
            <img src={`${company2?.image}`} alt="Company Logo" className="w-10 h-10 rounded-md" />
          ) : (
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="#121212" />
              <g clipPath="url(#sb-a)">
                <path fill="url(#sb-b)" d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z" />
                <path fill="url(#sb-c)" fillOpacity=".2" d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z" />
                <path fill="#3ECF8E" d="M14.375 6.367c.506-.638 1.532-.289 1.544.525l.078 11.903H8.094c-1.45 0-2.258-1.674-1.357-2.81l7.638-9.618Z" />
              </g>
            </svg>
          )}
        </div>

        <div className="grid grow gap-2">
          <motion.label
            whileHover={{ color: "#00E6FF", textShadow: "0px 0px 10px #00E6FF" }}
            className="text-white font-semibold"
          >
            {searchResult.name}
            <span className="text-cyan-300 text-xs font-normal">
              {"  "} ({searchResult.symbol}) • {searchResult.currency}
            </span>
          </motion.label>
          <p className="text-cyan-400 text-xs">{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
        </div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
        </motion.div>
      </motion.div>
    </RadioGroup> */}

    <RadioGroup
      className="w-full max-w-[90%] mx-auto px-[10%] md:px-0 mb-2"
      defaultValue="1"
    >
        <motion.label
          key={id}
          whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px #00E6FF" }}
          className="border-2 border-cyan-400 flex items-center gap-3 rounded-lg 
                     p-4 shadow-[0_0_10px_#00E6FF] transition-all duration-300 
                     bg-black/50 backdrop-blur-lg cursor-pointer"
        >
          {/* Imagen o Icono */}
          {company2?.image && !company2.defaultImage ? (
            <img src={company2.image} alt="Company Logo" className="w-10 h-10 rounded-md" />
          ) : (
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="#121212" />
              <g clipPath="url(#sb-a)">
                <path fill="url(#sb-b)" d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z" />
                <path fill="url(#sb-c)" fillOpacity=".2" d="M17.63 25.52c-.506.637-1.533.287-1.545-.526l-.178-11.903h8.003c1.45 0 2.259 1.674 1.357 2.81l-7.637 9.618Z" />
                <path fill="#3ECF8E" d="M14.375 6.367c.506-.638 1.532-.289 1.544.525l.078 11.903H8.094c-1.45 0-2.258-1.674-1.357-2.81l7.638-9.618Z" />
              </g>
            </svg>
          )}

          {/* Contenido */}
          <div className="grow">
            <p className="text-white font-semibold">
              {searchResult.name}
              <span className="text-cyan-300 text-xs font-normal">
                {"  "} ({searchResult.symbol}) • {searchResult.currency}
              </span>
            </p>
            <p className="text-cyan-400 text-xs">{searchResult.exchangeFullName} - {searchResult.exchange}</p>
          </div>

          {/* Botón de Portafolio */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
          </motion.div>
        </motion.label>
      
    </RadioGroup>



    {/* <br /> */}
    {/* <div className="container mx-auto px-4">
          <div 
              key={props.id} 
              id={props.id} 
              className="flex w-full items-center justify-between p-5 text-base font-medium text-gray-500 bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <Link 
                to={`/Company/${props.searchResult.symbol}/company-profile`} 
                className="font-bold text-left w-1/4 md:w-1/5"
            >
                {props.searchResult.name} ({props.searchResult.symbol})
            </Link>            
            <p className="w-1/4 md:w-1/5 text-center">{props.searchResult.currency}</p>
            <p className="font-bold w-1/4 md:w-1/5 text-center">
                {props.searchResult.exchangeShortName} - {props.searchResult.stockExchange}
            </p>
            <div className="w-1/4 md:w-1/5 flex justify-center">
                <AddPortfolio 
                    onPortfolioCreate={props.onPortfolioCreate} 
                    symbol={props.searchResult.symbol} 
                />
            </div>
        </div>
    </div> */}


    </>
    


  // <div
  //   className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
  //   key={id}
  //   id={id}
  // >
  //   <Link to={`/Company/${searchResult.symbol}/company-profile`} className="font-bold text-center text-black md:text-left">
  //     {searchResult.name} ({searchResult.symbol})
  //   </Link>
  //   <p className="text-black">{searchResult.currency}</p>
  //   <p className="font-bold text-black">
  //     {searchResult.exchangeShortName} - {searchResult.stockExchange}
  //   </p>
  //   <AddPortfolio
  //     onPortfolioCreate={onPortfolioCreate}
  //     symbol={searchResult.symbol}
  //   />
  // </div>
  )
}

export default Card