

function CouncilMembers({ data }) {

    return (

        <div className="CouncilMembers flex  my-4" >
            <div className="CouncilMemberLeft">

                <img 
                src={data.councilMemberImgLink} 
            
                style={
                    { 
                        // objectFit:"contain",
                    height: "138.22479248046875px", 
                    width: "138.22476196289062px",
                    // width:"100%",
                    borderRadius: "9px",
                 }
                } 
                alt="council_member image not displayed" 
                />

            </div>


            <div 
            className="CouncilMemberRight flex-col  ml-7 flex-wrap py-5 align-bottom items-center justify-center" 
            style={{ fontFamily: "Azeret Mono", fontSize: "20px" }}
            >

                <div className="CouncilMemberName text-[#47B3AF] font-bold uppercase" style={{ fontWeight: 700 }}>{data.councilMembersName}</div>
                <div className="CouncilMemberDesignation text-[#FF6B94]">{data.councilMemberDesignation}</div>
                <div className="CouncilMemberAcademicDetails text-[#EFC0FF] flex-wrap">{data.councilMemberAcademicDetails}</div>
            </div>
        </div>
    )
}

export default CouncilMembers