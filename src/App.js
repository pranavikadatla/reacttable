import React,{useState} from "react";
import DataFromApi from "./components/data";
import RenderData from "./components/RenderData";
const App=()=>{
  const [data,setData]=useState("")
  return(
    <div>
      <DataFromApi setData={setData}/>
      <RenderData data={data}/> 
    </div>
  )
}
export default App;