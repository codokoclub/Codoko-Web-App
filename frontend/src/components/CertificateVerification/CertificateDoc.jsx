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
    const canvas = await html2canvas(element, {
        scale: 2,
        onclone: (clonedDoc) => {
            // Find the elements in the CLONED document
            const clonedCont = clonedDoc.getElementById("certificate")
            const clonedDocBody = clonedCont.querySelector(".CertificateDoc")

            // Reset container constrains so it fits the full certificate
            clonedCont.style.width = "auto"
            clonedCont.style.maxWidth = "none"
            clonedCont.style.overflow = "visible"

            // Reset scale to 1.0 to get full resolution
            if (clonedDocBody) {
                clonedDocBody.style.transform = "scale(1)"
                // Centering might need adjustment if flexgap changes, but scale(1) is key
                // Ensure it uses its native 940px width
                clonedDocBody.style.width = "940px"
                clonedDocBody.style.height = "595px"
            }
        }
    })
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

        <div className="OuterCont w-full px-4 sm:px-8 md:px-[80px] lg:px-[140px] flex flex-col items-center">
            <div className="CertificateCont flex items-start justify-center py-[20px] w-full min-w-0 max-w-full md:max-w-full h-[200px] min-[375px]:h-[230px] min-[500px]:h-[310px] sm:h-[390px] md:h-[450px] lg:h-auto overflow-hidden" style={{ fontFamily: "Azeret Mono" }} id="certificate">



                <div className="CertificateDoc flex flex-col items-center justify-between w-[940px] h-[595px] pt-[70px] px-[60px] origin-top scale-[0.30] min-[375px]:scale-[0.35] min-[500px]:scale-[0.48] sm:scale-[0.62] md:scale-[0.72] lg:scale-100" >

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

            <div className="CertificationDownloadBtn flex justify-center items-center cursor-pointer py-[10px] mt-[10px]" style={{ fontFamily: "Azeret Mono" }}>
                <button className="DownloadBtn rounded px-[10px] bg-red flex items-center cursor-pointer text-sm sm:text-base" onClick={downloadCertificate}>

                    <i class="ri-download-line" id="downloadBtn"></i>
                    <label htmlFor="downloadBtn" className="mx-[10px] sm:mx-[20px] text-left">
                        Download Certificate in PDF
                    </label>
                </button>

            </div>

            {/* Spacing compensation for scaled element */}
            <div className="hidden lg:block h-0"></div>


        </div>

    )
}


export default CertificateDoc