
import { useState,useEffect,useCallback,useRef } from "react"

function CertificateHeader({asA})
{

   
    return(

        <div className="CertificateHeader flex justify-between items-center  mb-[20px]" >

<div className="CertificateHeaderLeft w-[30px]">

    <div className="">

    </div>

</div>
<div className="CertificateHeaderMid flex flex-col items-center ">

<span className="upper font-extrabold uppercase text-[48px]">Certificate</span>
<span className="upper font-normal text-[20px] uppercase"> of {asA} </span>
</div>
<div className="CertificateHeaderRight flex flex-col items-center">

    <div className="CertificateHeaderRightLogoImg">
        <img src="/src/assets/CodokoClubLogo.png" width="60px" height="60px" alt="logo_not_displayed" />
    </div>
    <div className="CertificateHeaderRightLogoContent">
        <span className="font-extrabold text-[12px] uppercase font-bold" style={{fontWeight:700}}>Codoko Club</span>
    </div>
</div>
        </div>
    )
}

export default CertificateHeader