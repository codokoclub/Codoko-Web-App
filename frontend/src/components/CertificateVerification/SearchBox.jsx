
import { useState, useCallback, useEffect, useRef } from "react"
function SearchBox() {
    return (

        <form className="SearchBox w-full flex justify-center px-2 min-[426px]:px-4 sm:px-8 md:px-[40px] lg:px-[140px] relative z-20 mb-8" method="POST" action="#">
            <div className="boxCont flex flex-col lg:flex-row gap-4 w-full min-w-0 max-w-full md:max-w-[600px] lg:max-w-[900px]" style={{ fontFamily: "Jaldi" }}>

                <div className="box flex-1 outline-0 bg-[#19183B]" style={{ borderRadius: "24px" }}>
                    <input type="search" name="" id="" placeholder="Certificate ID" className="w-full h-[59px] font-[400] text-[14px] min-[426px]:text-[18px] sm:text-[24px] px-[20px] bg-[#19183B] outline-0 text-white" style={{ borderRadius: "18px" }} />
                </div>
                <div className="box flex items-center justify-center lg:justify-start">
                    <input type="submit" value="Verify" className="w-[187px] h-[59px] cursor-pointer bg-[#3E1E68] text-white text-[16px] min-[426px]:text-[18px] font-bold" style={{ border: "2px solid #B277FF", borderRadius: "18px" }} />
                </div>
            </div>
        </form>
    )
}

export default SearchBox