import { useState } from "react"
import CertificateHeader from "./CertificateHeader"
import CertificateMiddleUp from "./CertificateMiddleUp"
import CertificateMiddleMid from "./CertificateMiddleMid"
import CertificateMiddleLower from "./CertificateMiddleLower"
import DesignAndSign from "./DesignAndSign"
import CertificateDate from "./CertificateDate"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

const downloadCertificate = async () => {
    const element = document.getElementById("certificate")
    const canvas = await html2canvas(element, { scale: 2 })
    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF("landscape", "pt", "a4")
    const width = pdf.internal.pageSize.getWidth()
    const height = (canvas.height * width) / canvas.width
    pdf.addImage(imgData, "PNG", 0, 0, width, height)
    pdf.save("certificate.pdf")
}

function CertificateDoc({ startDate, endDate, designation, asA }) {



    const message = `for ${asA} the Codoko Club and leading us as our very first ${designation}
from ${startDate} to ${endDate}.`
    return (

        <div className="OuterCont">
            <div className="CertificationDownloadBtn flex items-center cursor-pointer  py-[10px] mt-[20px] px-[40px]" style={{ fontFamily: "Azeret Mono" }}>
                <button className="DownloadBtn rounded px-[10px] bg-red flex items-center cursor-pointer" onClick={downloadCertificate}>

                    <i class="ri-download-line" id="downloadBtn"></i>
                    <label htmlFor="downloadBtn" className="mx-[20px]">
                        Download Certificate in PDF
                    </label>
                </button>

            </div>

            <div className="CertificateCont flex items-center justify-center  py-[30px] px-[20px] " style={{ fontFamily: "Azeret Mono" }} id="certificate">



                <div className="CertificateDoc flex flex-col
            items-center justify-between  w-[940px] h-[595px]  pt-[70px] px-[60px]  " >

                    <div className="CertificateCard flex flex-col  flex flex-col">

                        <div className="CertificateHeader ">
                            <CertificateHeader asA="Service" />
                        </div>
                        <div className="CertificateMiddle flex flex-col items-center justify-center">

                            <div className="CertificateMiddleUp">
                                <CertificateMiddleUp content="With immense gratitude, we celebrate" candidateName="MR. JATIN KUMAR MEHTA" />
                            </div>
                            <div className="CertificateMiddleMid">
                                <CertificateMiddleMid content={message} />
                            </div>
                            <div className="CertificateMiddleLower">
                                <CertificateMiddleLower gratitudeMsg="
Thank you for your foundational leadership and dedication!"/>
                            </div>
                        </div>
                        <div className="CertificateLower ">
                            <div className="CertificateLowerTop my-[20px] flex justify-between">
                                <DesignAndSign signImg="/src/assets/CertificatePage/chairman_sign.png" designation="CLUB CHAIRMAN" name="Mr. Pankaj Kumar Ray" />
                                <DesignAndSign signImg="/src/assets/CertificatePage/chairman_sign.png" designation="VICE CHAIRMAN" name="Mr. Yuvraj " />
                                <DesignAndSign signImg="/src/assets/CertificatePage/chairman_sign.png" designation="FACULTY INCHARGE" name="Mr. Pooja Goel" />

                            </div>

                            <div className="CertificateLowerBottom">
                                <CertificateDate />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}


export default CertificateDoc