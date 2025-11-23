
import { useState,useCallback,useEffect,useRef } from "react"
function SearchBox(){
    return(
        
        <form className="SearchBox" method="POST" action="#">
            <div className="boxCont flex h-[59px] " style={{fontFamily:"Jaldi"}}>

            <div className="box  w-[775px]  outline-0 bg-[#19183B " style={{borderRadius:"24px"}}>
                <input type="search" name="" id="" placeholder="Certificate ID" className="w-[100%] h-[100%] font-[400] text-[24px] px-[20px] bg-[#19183B] outline-0" style={{borderRadius:"18px"}} />
            </div>
            <div className="box  flex items-center">
                <input type="submit" value="Verify" className="w-[187px] cursor-pointer  bg-[#3E1E68] h-[100%] " style={{border:"2px solid #B277FF",borderRadius:"18px"}}/>
            </div>
            </div>
        </form>
    )
}

export default SearchBox