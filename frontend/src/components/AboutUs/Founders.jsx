

function Founders({ dp, fullName, designation, academicDetails, desc }) {
    return (

        <div className="founders flex flex-row mx-[160px] my-[50px]   justify-center" style={{ fontFamily: "Azeret Mono" }}>

            <div className="foundersLeft mr-[45px] w-[100%] ">

                <img src={dp} height="240px" width="240px"  alt="founders_image_not_displayed "    style={{ borderRadius: "9px" 
                 
                }} />
            </div>
            <div className="foundersRight">
                <div className="foundersRightTop flex flex-col justify-between my-[15px]">
                    <span className="foundersName text-[700] text-[#48B3AF] text-[22px] uppercase">Mr. {fullName}</span>
                    <span className="foundersDesignation text-[#FF6A94] text-[19px] ">{designation}</span>
                    <span className="foundersAcademicDetails text-[#EFC0FF] text-[19px]">{academicDetails}</span>
                </div>
                <div className="foundersRightBottom">

                    <span className="foundersDesc text-[#F0FF99] text-[16px]">{desc}</span>
                </div>
            </div>
        </div>
    )
}

export default Founders