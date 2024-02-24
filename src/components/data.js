import React,{useEffect} from "react";
import axios from "axios";
const DataFromApi=({setData} )=>{
    
 
  useEffect(()=>{
       RetrivingData();
    },[])
 async function RetrivingData (){
     try{
         const response= await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
          console.log(response.data)
          setData(response.data)
       }
     catch(err){
         console.log(err)
     }
   }


    return(
        <div>
        

        </div>
    )
}
export default DataFromApi;