import {ChevronsLeft} from "lucide-react"  ;
import {ChevronLeft} from "lucide-react"  ;
import {ChevronsRight} from "lucide-react"  ;
import {ChevronRight} from "lucide-react"  ;


function Pagination () {
    return (
        <div className="flex w-full justify-end p-4 items-center gap-6">
            <select className="flex items-center justify-between w-52 border rounded-md p-2 font-Tahoma text-subtilGray " >
                <option>100 per page</option>
                <option>200 per page</option>
                <option>300 per page</option>
                <option>400 per page</option>
                <option>500 per page</option>

            </select>
            {/* <div className="flex items-center justify-between w-52 border rounded-md p-2 font-Tahoma">
                <p>100 per page</p>
                <ChevronDown size={20} color="gray"  />
            </div> */}
            {/* <img src="https://s3-alpha-sig.figma.com/img/5fc2/cc2e/086baa104833ce5d2be0a39979249cdb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQVcXLDfvTsjEShxho6vZpU672oB6eR0B1vyFHrKSW3NMEqx-3ZNqPH2IkAiyGnVq9mMMMy~sO9QzcZ602l-3ZQTRyYnuTpC6FEH3PRcwXIfaH9Cn9IxnFNGJtTbRFcPee184yi~u8iYl3PDpK3cY407n1B~xmm2IMcfAFR--oCAOxMDPZ762fow9YuYM1BdX9bFxJfKbu4zB-ec8qEJ1R79zneHW1cGK-mSYtx2V2Ep8KSChQNoDRy3SAx4NYLMRKa-4HakurbxR1oHF2H3PtLk7yE~mFwIR0np878cltw-P03Fms9wXcCvU-Jqzl0oz1fk3v1wvBqquJFxLk-X9g__" 
            alt="pagination de 1 à 4"
            className="w-64 h-auto"/> */}
            <div className="flex gap-6">
                <p>Page 1 sur 4</p>
                <div className="flex gap-4 items-center">
                    <ChevronsLeft size={18} className="text-subtilGray"/>
                    <ChevronLeft size={18} className="text-subtilGray"/>
                    <ChevronRight size={18} className="text-subtilGray"/>
                    <ChevronsRight size={18} className="text-subtilGray"/>
                </div>
            </div>
        </div>
    );
}


export default Pagination;