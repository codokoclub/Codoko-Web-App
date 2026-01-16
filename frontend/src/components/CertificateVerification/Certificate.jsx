
import { useState, useCallback, useRef, useEffect } from "react"
import SearchBox from "./SearchBox"
import CertificateDoc from "./CertificateDoc"
import HeaderComm from "../CommonCom/HeaderComm"


function Certificate() {
  return (

    <div className="my-0 w-full overflow-x-hidden flex flex-col items-center gap-8" >



      <HeaderComm clubDesc="Certificate Verification" />
      <SearchBox />
      <CertificateDoc startDate="October 15, 2023" endDate="October 4, 2025" designation="Chairman" asA="founding" />


    </div>
  )
    return (

        <>

            <HeaderComm clubDesc="Certificate Verification" />
            <SearchBox />
            <CertificateDoc startDate="October 15, 2023" endDate="October 4, 2025" designation="Chairman" asA="founding" />
            

        </>
    )
}

export default Certificate
