import DateInfo from "./DateInfo";


function CertificateDate() {
    return (

        <div className="CertificateDate flex justify-between my-[20px] text-[#A1B7FF] text-[14px] font-light">

            <div className="CertificateDateLeft">

                <DateInfo label="Issued on" date="04-10-2025" />
                <DateInfo label="Expires on" date="04-10-2025" />
            </div>
            <div className="CertificateDateRight">

                <DateInfo label="Certificate Id" date="D04M10Y2025S001" />
                <DateInfo label="URL" date="codoko.onrender.com/certificate" />
            </div>
        </div>
    )
}

export default CertificateDate