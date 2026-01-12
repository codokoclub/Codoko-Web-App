

function CertificateMiddleUp({content,candidateName})
{
    return(

        <div className="CertificateMiddleUp 
         ">


<div className="fewWords text-[14px] font-medium text-center my-[15px]">{content}</div>
<div className="candidateName  bg-[#05050B] text-[15px] uppercase flex items-center justify-center font-bold px-[60px] py-[10px] my-[5px]" style={{borderRadius:"9px",fontWeight:700}}>{candidateName}</div>
        </div>
    )
}

export default CertificateMiddleUp