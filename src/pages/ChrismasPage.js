import react from 'react';

import TailwindLogo from   "../components/tailwindLogo";
import BarreNavigationChrismasPage from   "../components/barreNavigationChristmas";
import MainChristmasPages from "../components/mainChristmasPages";
import { ArrowLeft } from 'lucide-react';
import { PlusSquare } from 'lucide-react';
import { Upload } from 'lucide-react';
import { Settings } from 'lucide-react';



function ChrismasPage() {
  return (
    <div className="w-full flex ">
        <TailwindLogo/>
        <div className= "w-full">
            <BarreNavigationChrismasPage/>
            <div>
                <MainChristmasPages/>
            </div>
        </div>
    </div>
  );
}

export default ChrismasPage;