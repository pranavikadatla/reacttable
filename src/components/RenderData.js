import React from "react"
const RenderData=({data})=>{

    return(
        <div class="table">
            <center>
        <table  border="1">
                {data.map(item=>(
                 <tr  key={item.id}>
                    <td className="row"> {<img height="40" src={item.image}/>}</td>
                   <td className="row"> {item.name}</td>
                   <td className="row"> {item.symbol}</td>
                   <td className="row">${item.current_price}</td>
                   <td className="row">${item.total_volume}</td>
                   
                 </tr>
                
                ))}
        </table>
        </center>
        </div>
    )
}
export default RenderData;