import { ArrowLeft } from 'lucide-react';
import { PlusSquare } from 'lucide-react';
import { Upload } from 'lucide-react';
import { Settings } from 'lucide-react';
import {Link} from "react-router-dom"; 


function BarreNavigationChrismasPage() {
    return (
        <nav className= " flex w-full h-auto items-center px-4 py-5 border-b justify-between ">
                <div className="flex items-center gap-4 ">
                    <Link to="/">
                        <button className=" flex items-center text-subtilGray gap-2.5 pr-4 py-1 border-r">
                            <ArrowLeft size={20} color="gray" /> 
                            Back
                        </button>
                    </Link>
                    <p className=" text-lg font-medium"> Chrismas 2024</p>
                </div>
                <div className="flex gap-2.5">
                    <button className=" flex items-center gap-2.5 py-2 px-4 bg-bgPurple rounded-md text-textPurple hover:bg-bgPurple2  "> 
                        <PlusSquare size={20} color="#463ADD" />Add products
                    </button> 
                    <button className=" flex items-center gap-2.5 py-2 px-4 border rounded-md text-textGray hover:bg-bgGray2 bg-cardWhite "> 
                       <Upload size={20} color="rgba(30, 31, 36, 1)" />Export
                    </button> 
                    <button className=" flex items-center gap-2.5 py-2 px-4 border rounded-md text-textGray hover:bg-bgGray2 bg-cardWhite  "> 
                        <Settings size={20} color="rgba(30, 31, 36, 1)" />Settings
                    </button> 
                </div>
            </nav>
    )
}



export default BarreNavigationChrismasPage;