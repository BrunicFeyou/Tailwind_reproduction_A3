import {Wand2} from "lucide-react";
import {MoreHorizontal} from "lucide-react";
import {XCircle} from "lucide-react";
import {Clock4} from "lucide-react";
import {LoaderCircle} from "lucide-react";
import {Glasses} from "lucide-react";
import {CheckCircle2} from "lucide-react";



function ProductCard({text, progressColor, tag, colorText, icon: Icon, progressWidht, bgTag, animation}) {
    if (tag === 'To improve') { 
        
    }
    
    return (
        <div className={`flex border  p-6 items-center rounded-md bg-cardWhite`}>
            <div className="flex-1 flex items-center gap-6">
                <input type="checkbox" className="  text-red-400 w-5 h-5" />
                    <img src="https://s3-alpha-sig.figma.com/img/3a77/5703/9320001ffd4e306cea093cd5a22a3baf?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gviZ8OuJzQkcn99bQ7ObwDxDPhzl6Z1qQ~r-UIb8Lu~0SEGedx7vVZAg3zwg8IX7k0pIjnJyhzCmk0Jurz9bXXnS6zB5heaodgv44vQA9rl3mXn5SG6EY3wRjL25c7irHuSKr6LWy28ZV51TG6~HWVO19aL7LWRL913UZS3XQhE0dq3qG7swJ2R9zAvBL1pLrfczAUqlmw9dW~uA6V6EyPCQHRxeznhLZ6uqE9iNndGE9x1MLGrSdqxl9X3cplgkSEU-mbcnGu09Xr6kQWksFZ8qiCOtBYcyKLmqb4CHhftMY4K3atqyCSVGhX65meENvGmaZddz3L0lSDecoQZuCg__"
                    alt="product" className="w-8 h-11" />
                    <div className="flex flex-col gap-3 ">
                        <p>{text}</p>
                        <div className="flex gap-1 items-center">
                            <p className="text-sm text-subtilGray pr-1 border-r ">Last updated 18 hours ago </p>
                            <p className="text-sm text-subtilGray">Create 2 May 2024 </p>
                        </div>    
                    </div>   
            </div>
            <div className="flex-1 flex items-center gap-5 justify-between ">
                         
                    <div className="w-40 bg-bgGray h-1.5 rounded-md">
                        <div className={`${progressWidht} h-full ${progressColor} rounded-md`}>

                        </div>
                    </div>  
                    <button className={`flex items-center gap-2 bg-bgGray py-1 px-4 rounded-md  ${colorText} ${bgTag}`}>
                        <Icon size={18} class= {`${colorText} ${animation}` } />
                        {tag}
                    </button>
                    <button className="flex items-center gap-2">
                        <MoreHorizontal size={18} color="gray" />
                    </button>
            </div>
        </div>
    );
    

}


function ProductCards() {
  return (
    <div className= " flex flex-col gap-3">
        <ProductCard text="Trottinette électrique Xiaomi Mi Electric Scooter 3..." progressColor="bg-progressRed" tag="To improve" icon={Wand2} progressWidht="w-1/12"  colorText="text-iconPurple" bgTag="bg-bgGray1" />
        <ProductCard text="Trottinette électrique Xiaomi Mi Electric Scooter 3..." progressColor="bg-progressRed" tag="To improve" icon={Wand2} progressWidht="w-2/6" colorText="text-iconPurple" bgTag="bg-bgGray1"  />
        <ProductCard text="Trottinette électrique Xiaomi Mi Electric Scooter 3..." progressColor="bg-progressRed" tag="To improve" icon={Wand2} progressWidht="w-2/6"  colorText="text-iconPurple" bgTag="bg-bgGray1" />
        <ProductCard text="Trottinette électrique Xiaomi Mi Electric Scooter 3..." progressColor="bg-progressRed" tag="To improve" icon={Wand2} progressWidht="w-3/6"  colorText="text-iconPurple" bgTag="bg-bgGray1" />
        <ProductCard text="Trottinette électrique Xiaomi Mi Electric Scooter 3..." progressColor="bg-progressYellow" tag="Error" icon={XCircle} progressWidht="w-4/12" colorText="text-progressRed" bgTag="bg-bgRed" />
        <ProductCard text="Trottinette électrique Xiaomi Mi Electric Scooter 3..." progressColor="bg-progressYellow" tag="Pending" icon={Clock4} progressWidht="w-1/2" colorText="text-subtilGray" bgTag="bg-bgGray2" />
        <ProductCard text="Trottinette électrique Xiaomi Mi Electric Scooter 3..." progressColor="bg-progressRed" tag="In progress" icon={LoaderCircle} progressWidht="w-1/2"  colorText="text-textPurple" bgTag="bg-bgPurple" animation="animate-spin"/>
        <ProductCard text="Trottinette électrique Xiaomi Mi Electric Scooter 3..." progressColor="bg-progressGreen" tag="To review" icon={Glasses} progressWidht="w-4/6"  colorText="text-progressYellow" bgTag="bg-bgYellow"/>
        <ProductCard text="Trottinette électrique Xiaomi Mi Electric Scooter 3..." progressColor="bg-progressGreen" tag="Done" icon={CheckCircle2} progressWidht="w-full" colorText="text-progressGreen" bgTag="bg-bgGreen" />
    </div>
  );
}

export default ProductCards;