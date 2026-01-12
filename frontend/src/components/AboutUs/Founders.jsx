
import Sclinks from "../CommonCom/Sclinks.jsx"
function Founders({ dp, fullName, designation, academicDetails, desc }) {

 const mediaDataInfo = [
  {
    id: "instagram",
    label: "Instagram",
    class: "ri-instagram-line"
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    class: "ri-linkedin-line"
  },
  {
    id: "youtube",
    label: "YouTube",

    class: "ri-youtube-line"
  },
  {
    id: "discord",
    label: "Discord",
    class: "ri-discord-line"
  },
  {
    id: "github",
    label: "GitHub",
    class: "ri-github-line"
  }
];

    const sc = mediaDataInfo.map(
  (elem=>{
  return <Sclinks url={elem.webAddress} icon={elem.class}/>
}))

    return (

        <div className="founders flex flex-row mx-[160px] my-[50px] " style={{ fontFamily: "Azeret Mono" }}>

            <div className="foundersLeft mr-[45px]   flex justify-center items-center">

                <img src={dp}  alt="founders_image_not_displayed "    style={{ borderRadius: "9px", aspectRatio:"1/1",width:"300px" 
                 
                }} />
            </div>
            <div className="foundersRight  w-[100%]">
                <div className="foundersRightTop flex flex-col justify-between my-[15px]">
                    <span className="foundersName text-[700] text-[#48B3AF] text-[22px] uppercase">Mr. {fullName}</span>
                    <span className="foundersDesignation text-[#FF6A94] text-[19px] ">{designation}</span>
                    <span className="foundersAcademicDetails text-[#EFC0FF] text-[19px]">{academicDetails}</span>
                </div>
                <div className="foundersRightBottom">

                    <span className="foundersDesc text-[#F0FF99] text-[16px]">{desc}</span>
                    <br/>
                    
                    {sc}
                </div>
            </div>
        </div>
    )
}

export default Founders