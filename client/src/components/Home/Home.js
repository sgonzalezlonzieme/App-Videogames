import { VideogamesHome } from "../VideogamesHome/VideogamesHome"
import { InputHome } from "../InputHome/InputHome"



export function Home(){
     
    return(
        <div>
           <div>
             <InputHome/>
           </div>
           <div>
             <VideogamesHome/>
           </div> 
        </div>
    )
}