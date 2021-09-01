import { VideogamesHome } from "../VideogamesHome/VideogamesHome"
import { HomeSearch } from "../HomeSearch/HomeSearch"



export function Home(){
     
    return(
        <div>
           <div>
             <HomeSearch/>
           </div>
           <div>
             <VideogamesHome/>
           </div> 
        </div>
    )
}