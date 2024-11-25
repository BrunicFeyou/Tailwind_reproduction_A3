import NavBarCatalogsPages from "./barreNavigationCatalogs"
import {Link} from "react-router-dom"; 
import {MoreHorizontal} from "lucide-react";


function cardDisplay (title, tags) {

    return (
        <div className="border rounded-lg flex flex-col gap-4 p-3 bg-cardWhite">
            <div className="flex-1 flex justify-between items-center">
                <Link to="/christmas">
                    <p className=" font-semibold text-xl underline "> {title}</p>
                </Link>
                <MoreHorizontal size={20} className="text-subtilGray" />
            </div>
            <div className=" flex gap-2 ">
                {tags.map((tag) => (
                    <button className= "border-2 border-inherit	rounded-md px-1 bg-bgGray h-fit text-sm"> {tag} </button>
                ))}
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-subtilGray text-sm">Created on 12.27.2024 </p>
                <p className="text-sm">254 products </p>
            </div>    
        </div>
    )
}

function MainCatalogsPages() {
  return (
    <div className = "flex-1">
            <NavBarCatalogsPages />
            <div className="px-4 py-8 grid  w-full gap-2.5 lg:grid-cols-3" >
                <div className="border rounded-lg flex flex-col gap-7 p-3">
                    <p className="text-sm"> Create catalog</p>
                    <p className="text-sm flex-1 text-subtilGray">Create new catalog to add products and generate content. </p>
                    <button className="bg-purple rounded-md text-white py-4 flex justify-center items-center gap-2 lg:p-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                    Create catalog</button> 
                </div>
                {cardDisplay("Christmas 2024", ["Sneakers", "boots"])}
                {cardDisplay("A very big title for a catalog with many thing", ["Sneakers", "boots", "Belt", "Socks", "+3"])}
            </div>
        </div>
  );
}


export default MainCatalogsPages;