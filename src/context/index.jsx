import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import md5 from "md5";

export const ComicsContext = createContext();


 export const ComicsContextProvider = ({ children }) => {
    
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);

    const publicKey = "30cae346137a1bd7724a14d513ce3b70";
    const privateKey = "48f5e053d71fd8152adc55c241d6f436eb6314ed";
    const time = Number(new Date());
    const hash = md5(time + privateKey + publicKey);



    const fechtComics = async () => {
      try {
        const fechtData = await axios(`https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&limit=96&ts=${time}&apikey=${publicKey}&hash=${hash}`);
        const result = fechtData.data.data.results;
        console.log(result);
        setComics(result)
        setLoading(false)
  
      } catch (error) {
        console.error(error)
      }
    }
  
  
    useEffect(() => {
      fechtComics();
    }, [])


     return (
         <ComicsContext.Provider
         value={{comics, setComics, loading, setLoading}}
         >
             {children}
         </ComicsContext.Provider>
     )
 }  