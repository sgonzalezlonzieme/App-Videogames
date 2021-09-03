import { VideogamesHome } from "../VideogamesHome/VideogamesHome"
import { HomeInputSearch} from "../HomeInputSearch/HomeInputSearch"
import { Filtered } from "../Filtered/Filtered"



export function Home(){
     
    return(
        <div>
           <div>
             <HomeInputSearch />
           </div>
           <div>
             <Filtered/>
           </div>
           <div>
             <VideogamesHome/>
           </div> 
        </div>
    )
}