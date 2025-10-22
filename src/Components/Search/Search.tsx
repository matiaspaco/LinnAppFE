import React, { ChangeEvent, useState, MouseEvent, SyntheticEvent, useRef, useEffect } from 'react'

import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search2: React.FC<Props> = ({onSearchSubmit,search,handleSearchChange}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  // const [search, setSearch] = useState<string>("");

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  //   console.log(e);
  // }
  // // const onClick = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
  // const onClick = (e: SyntheticEvent) => {
  //   console.log(e);
  // };


  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);




  
  return (

    <>
        <div className="flex flex-wrap justify-center gap-4 p-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={`flex w-40 h-40 items-center justify-center rounded-lg bg-green-500 text-white text-xl font-bold ${
            (index % 4 === 1 || index % 4 === 3) ? "self-end" : "self-start"
          }`}
        >
          Card {index + 1}
        </div>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={`relative flex w-40 h-40 items-center justify-center rounded-lg text-white text-xl font-bold 
            transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00ff7f] 
            backdrop-blur-md bg-white/10 border border-green-400/50 
            ${(index % 4 === 1 || index % 4 === 3) ? "self-end" : "self-start"}
          `}
        >
          <div className="absolute inset-0 bg-green-400 opacity-20 blur-xl rounded-lg"></div>
          <span className="relative z-10">Card {index + 1}</span>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={`relative flex w-40 h-40 items-center justify-center rounded-lg text-white text-xl font-bold 
            transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_#00ff7f] 
            backdrop-blur-lg bg-white/10 border border-green-400/50 
            ${(index % 4 === 1 || index % 4 === 3) ? "self-end" : "self-start"}
          `}
        >
          {/* Efecto de luz fluorescente */}
          <div className="absolute inset-0 bg-green-400 opacity-30 blur-3xl rounded-lg"></div>
          <div className="absolute inset-0 bg-green-400 opacity-20 blur-[60px] rounded-lg"></div>

          {/* Contenido */}
          <span className="relative z-10">Card {index + 1}</span>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center w-full h-48 rounded-2xl text-white text-2xl font-semibold 
            backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg
            transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00ff7f]"
        >
          {/* Efecto de luz verde detrás */}
          <div className="absolute inset-0 bg-green-400 opacity-30 blur-3xl rounded-2xl"></div>
          <div className="absolute inset-0 bg-green-400 opacity-20 blur-[80px] rounded-2xl"></div>

          {/* Contenido de la Card */}
          <span className="relative z-10">Lemon Card {index + 1}</span>
        </div>
      ))}
    </div>



    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center w-full h-48 rounded-2xl text-white text-2xl font-semibold 
            backdrop-blur-lg bg-white/10 border border-green-400 shadow-[0_0_20px_#00ff7f] 
            transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_#00ff7f]"
        >
          {/* Efecto de luz verde detrás */}
          <div className="absolute inset-0 bg-green-400 opacity-30 blur-3xl rounded-2xl"></div>
          <div className="absolute inset-0 bg-green-400 opacity-20 blur-[80px] rounded-2xl"></div>

          {/* Contenido de la Card */}
          <span className="relative z-10">Lemon Card {index + 1}</span>
        </div>
      ))}
    </div>




    {/* <div className="flex flex-col items-center gap-4 p-8">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white 
                   bg-white/10 border border-violet-400 rounded-full 
                   backdrop-blur-lg shadow-[0_0_20px_#b580ff] transition-all duration-300 
                   hover:scale-105 hover:shadow-[0_0_40px_#b580ff] active:scale-95"
      >

        <div className="absolute inset-0 bg-violet-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute inset-0 bg-violet-400 opacity-20 blur-[80px] rounded-full"></div>


        <Search className="w-5 h-5 text-violet-300" />
        
        <span className="relative z-10">Buscar</span>
      </button>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.6, transition: { type: "spring", stiffness: 80 } }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="relative w-full max-w-md"
          >

            <div className="absolute inset-0 bg-violet-500 opacity-30 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 bg-green-400 opacity-20 blur-[80px] rounded-full"></div>


            <input
              ref={inputRef}
              type="text"
              placeholder="Escribe algo..."
              className="relative w-full px-5 py-3 text-lg font-semibold text-white bg-black/50 
                         border border-violet-400 rounded-full shadow-[0_0_20px_#b580ff] 
                         backdrop-blur-lg placeholder:text-violet-300 focus:outline-none focus:ring-2 
                         focus:ring-violet-400"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div> */}




    {/* <div className="flex flex-col items-center gap-6 p-8 relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.08, boxShadow: "0px 0px 40px #00E6FF" }}
        animate={
          isOpen
            ? { scale: 1.2, boxShadow: "0px 0px 60px #00E6FF" }
            : { boxShadow: "0px 0px 20px #00E6FF" }
        }
        className="relative flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white 
                   bg-white/10 border-2 border-cyan-400 rounded-full 
                   backdrop-blur-lg transition-all duration-300 
                   shadow-[0_0_20px_#00E6FF] hover:shadow-[0_0_50px_#00E6FF] 
                   active:scale-95 animate-neon-border"
      >

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-cyan-500 opacity-40 blur-3xl rounded-full"
          />
        )}


        <div className="absolute inset-0 bg-cyan-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-[80px] rounded-full"></div>


        <Search className="w-6 h-6 text-cyan-300 relative z-10" />

        <span className="relative z-10">Buscar</span>
      </motion.button>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="relative w-full max-w-md"
          >

            <div className="absolute inset-0 bg-cyan-500 opacity-30 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 bg-blue-400 opacity-20 blur-[80px] rounded-full"></div>


            <input
              ref={inputRef}
              type="text"
              placeholder="Escribe algo..."
              className="relative w-full px-5 py-4 text-lg font-semibold text-white bg-black/60 
                         border-2 border-cyan-400 rounded-full 
                         shadow-[0_0_20px_#00E6FF] backdrop-blur-lg placeholder:text-cyan-300 
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 animate-neon-border"
            />
            <button type='submit'>test</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div> */}



    <div className="flex flex-col items-center gap-6 p-8 relative">
      {/* Botón de Búsqueda */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.08, boxShadow: "0px 0px 40px #00E6FF" }}
        animate={isOpen ? { scale: 1.2, boxShadow: "0px 0px 60px #00E6FF" } : { boxShadow: "0px 0px 20px #00E6FF" }}
        className="relative flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white 
                   bg-white/10 border-2 border-cyan-400 rounded-full 
                   backdrop-blur-lg transition-all duration-300 
                   shadow-[0_0_20px_#00E6FF] hover:shadow-[0_0_50px_#00E6FF] 
                   active:scale-95 animate-neon-border"
      >
        {/* Destello inicial */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.5 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-cyan-500 opacity-40 blur-3xl rounded-full"
          />
        )}

        {/* Efecto de luz detrás */}
        <div className="absolute inset-0 bg-cyan-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute inset-0 bg-cyan-400 opacity-20 blur-[80px] rounded-full"></div>

        {/* Icono de Búsqueda */}
        <Search className="w-6 h-6 text-cyan-300 relative z-10" />
        {/* Texto del Botón */}
        <span className="relative z-10">Search</span>
      </motion.button>

      {/* Input Desplegable con Botón de Link */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="relative w-full max-w-md"
          >
            {/* Glow detrás del Input */}
            <div className="absolute inset-0 bg-cyan-500 opacity-30 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 bg-blue-400 opacity-20 blur-[80px] rounded-full"></div>

            {/* Input con Botón de Link */}
            <form className="relative flex items-center" onSubmit={onSearchSubmit}>
              <input
                ref={inputRef}
                id="search-input"               
                type="search"
                placeholder="Search companies..."
                className="w-full px-5 py-4 pr-16 text-lg font-semibold text-white bg-black/60 
                           border-2 border-cyan-400 rounded-full 
                           shadow-[0_0_20px_#00E6FF] backdrop-blur-lg placeholder:text-cyan-300 
                           focus:outline-none focus:ring-2 focus:ring-cyan-400 animate-neon-border"
                required value={search} onChange={handleSearchChange}
              />
              {/* Botón de Link a la Derecha */}
              <button
                type="submit"
                className="absolute right-3 flex items-center justify-center w-10 h-10 rounded-full 
                           bg-cyan-400/10 border border-cyan-400 shadow-[0_0_15px_#00E6FF] 
                           hover:shadow-[0_0_30px_#00E6FF] transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 text-cyan-300" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>



{/* old approach working ok */}
    {/* <br />
    <br />
    <br />
    <br />
    <form className="flex items-center max-w-sm mx-auto    --border-bottom-width: 1px; --border-color: rgba(0, 240, 104, 0.6); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; background: radial-gradient(56.7% 100% at 50% 100%, rgba(0, 168, 73, 0.6) 0%, rgba(0, 166, 72, 0.58) 0%, rgba(0, 113, 49, 0.2) 71.5653%, rgba(0, 0, 0, 0) 100%); border-radius: 16px; opacity: 1;" 
     onSubmit={onSearchSubmit}>   
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
                </svg>
            </div>
            <input type="search" id="search-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search companies..." 
            required value={search} onChange={handleSearchChange} />
        </div>
        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-lightGreen-700 rounded-lg border border-lightGreen-700 hover:bg-lightGreen-800 focus:ring-4 focus:outline-none focus:ring-lightGreen-300 dark:bg-lightGreen dark:hover:bg-lightGreen-700 dark:focus:ring-lightGreen-800">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
        </button>
    </form>
    <br />
    <br />
    <br />
    <br /> */}
    </>


  //   <section className="relative bg-gray-100">
  //   <div className="max-w-4xl mx-auto p-6 space-y-6">
  //     <form
  //       className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
  //       onSubmit={onSearchSubmit}
  //     >
  //       <input
  //       type="search"
  //         className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
  //         id="search-input"
  //         placeholder="Search companies"
  //         value={search}
  //         onChange={handleSearchChange}
  //       ></input>
  //     </form>
  //   </div>
  // </section>



  // <>
  //   <form onSubmit={onSearchSubmit}>
  //     <input value={search} onChange={handleSearchChange} />
  //   </form>
  // </>  
  )
}

export default Search2