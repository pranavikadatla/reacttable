import React from "react"
const RenderData=({data})=>{

    return(
        <div>
            <center>
        <table class="table" border="1">
                {data.map((item)=>(
                 <tr className="row" key={item.id}>
                    <td> {<img height="40" src={item.image}/>}</td>
                   <td> {item.name}</td>
                   <td> {item.symbol}</td>
                   <td>${item.current_price}</td>
                   <td>${item.total_volume}</td>
                   
                 </tr>
                
                ))}
        </table>
        </center>
        </div>
    )
}
export default RenderData;