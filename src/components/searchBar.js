
import {Search} from 'lucide-react';
import {Filter } from 'lucide-react';
import {ListFilter} from 'lucide-react';

function SearchBar() {
  return (
    <div className=" h-auto items-center flex justify-end py-8 gap-2">
      <input className =" relative border w-96 rounded-md py-2 pl-9 border-subtilGray flex px-2.5 gap-2.5 bg-cardWhite " type="text" placeholder="Search product"/>
        <Search
            className=" absolute text-gray-500 right-90 "
            size={18}
        />
       
     
      <div className =" flex w-auto border rounded-md border-subtilGray justify-center items-center p-2 relative hover:bg-bgGray2" type="text" placeholder="">
            <Filter
                className=" text-gray-500"         
            />
            <div className='w-3 h-3 rounded-full bg-progressRed absolute top-1 left-6 '></div>
            <div className='w-3 h-3 rounded-full bg-progressRed absolute top-1 left-6 animate-ping'></div>
      </div>
      <div className ="border w-fit rounded-md  border-subtilGray p-2 hover:bg-bgGray2" type="text" placeholder="" >
        <ListFilter
            className=" t text-gray-500"
            size={20}
        />
      </div>
    </div>
  );
}


export default SearchBar;