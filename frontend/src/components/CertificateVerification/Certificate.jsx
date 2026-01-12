
import { useState, useCallback, useRef, useEffect } from "react"
import SearchBox from "./SearchBox"
import CertificateDoc from "./CertificateDoc"
import HeaderComm from "../CommonCom/HeaderComm"


function Certificate() {
    return (

    <div className="my-20" >

  

            <HeaderComm clubDesc="Certificate Verification" />
            <SearchBox />
            <CertificateDoc startDate="October 15, 2023" endDate="October 4, 2025" designation="Chairman" asA="founding" />
            

          </div>
    )
}

export default Certificate