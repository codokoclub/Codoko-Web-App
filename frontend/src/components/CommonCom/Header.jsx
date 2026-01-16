

import Sclinks from "./Sclinks.jsx";
import CouncilLogoutBtn from "../Dashboard/CouncilLogoutBtn.jsx"
import HeaderComm from "./HeaderComm.jsx";

function Header({ clubDisc, aboutPage }) {
function Header({clubDisc,aboutPage}) {


    return (
        <div className="flex flex-col">

            
            <HeaderComm clubDesc={clubDisc} />

            {/* Should be done by Prop not hardcoding */}
            <div
                className={`headerBottom flex flex-col mx-4 sm:mx-8 md:mx-[80px] lg:mx-[110px] ${aboutPage ? "hidden" : "flex"}`}
            >

                <div className="headerBottomUp " >
                    <span className="headerBottomUpTagline text-[14px] sm:text-[15px] md:text-[16px] codeBlock" style={{ fontFamily: "B612 Mono", overflowX: "auto", display: "block", wordWrap: "break-word" }}>
                        <span className="text-red-700  font-extrabold">print(</span> “Codoko is a coding club at ABSS Institute of Technology, built to inspire, educate, and empower students through code...” <span className="text-red-700 font-extrabold">)</span>
          
            <div className="headerTop flex flex-row h-[54px] justify-between  ">

                <div className="headerLeft">


                </div>


            </div>
           <HeaderComm clubDesc={clubDisc}/>

            {/* Should be done by Prop not hardcoding */}
        <div
  className={`headerBottom flex flex-col mx-[110px] ${aboutPage ? "hidden" : "flex"}`}
> 

                <div className="headerBottomUp " >
                    <span className="headerBottomUpTagline text-[16px]" style={{ fontFamily: "B612 Mono" }}>
                        <span className="text-red-700  font-extrabold">print(</span> “Codoko is a coding club at ABSS Institute of Technology, built to inspire, educate, and empower students through code...” <span className="text-red-700 font-extrabold">)</span> 


                    </span>
                </div>
                <div className="headerBottomDown mt-[20px] mb-[20px] text-center sm:text-left">

                    <a href="https://imaginary-currant-995.notion.site/Constitution-of-Codoko-Club-27f8e492d1dd80f481ecf6390800d1b3?source=copy_link" target="_blank" className="viewConstitutionCodoko text-[#EF7722] border-b-2 inline-block" style={{ fontFamily: "B612 Mono" }}>View the Constitution of Codoko</a>
                <div className="headerBottomDown mt-[20px] mb-[20px]">

                    <a href="https://imaginary-currant-995.notion.site/Constitution-of-Codoko-Club-27f8e492d1dd80f481ecf6390800d1b3?source=copy_link" target="_blank" className="viewConstitutionCodoko text-[#EF7722] text-[#EF7722]-700 border-b-2 " style={{ fontFamily: "B612 Mono" }}>View the Constitution of Codoko</a>
                </div>
            </div>
        </div>
    )
}

export default Header
