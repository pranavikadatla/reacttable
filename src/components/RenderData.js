import React from "react"

const RenderData=({data})=>{

    return(
        <div class="table">
        <table border="1">
            <tbody>
           {data && data.length >0 && data.map (item=>(
                 <tr  key={item.id}>
                     <td className="row"> {<img height="40" src={item.image}/>}</td>
                     <td className="row"> {item.name}</td>
                     <td className="row"> {item.symbol}</td>
                     <td className="row">${item.current_price}</td>
                     <td className="row">${item.total_volume}</td>
                 </tr>
                 
                 ))}
                 </tbody>
        </table>
        </div>
    )
}
export default RenderData;