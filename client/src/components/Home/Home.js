import { VideogamesHome } from "../VideogamesHome/VideogamesHome"
import { HomeSearch } from "../HomeSearch/HomeSearch"
import { FilterComponent } from "../FilterComponent/FilterComponent"



export function Home(){
     
    return(
        <div>
           <div>
             <HomeSearch/>
           </div>
           <div>
             <FilterComponent/>
           </div>
           <div>
             <VideogamesHome/>
           </div> 
        </div>
    )
}