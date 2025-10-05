

import Sclinks from "./Sclinks.jsx";

function Header() {


    return (
        <div className="flex flex-col">
          
            <div className="headerTop flex flex-row h-[54px] justify-between mt-10px mb-50px">

                <div className="headerLeft">
                   {/* Included in case of DashBoard not now */}
                </div>


            </div>
            <div className="headerMiddle mt-[200px] mb-[30px] mx-[80px] " style={{ fontFamily: "Nanum Gothic" }}>

                <div className="codokoDetails flex flex-row items-center">
                    <div className="codokoDetailLeft">
                        <div className="codokoLogo mr-4">
                            <img src="/src/assets/CodokoClubLogo.png" className="w-[109px] height-[109px]" alt="codoko_club logo not displayed" srcset="" />
                        </div>
                    </div>
                    <div className="codokoDetailRight">
                        <div className="clubName">
                            <span className="clubNameBox text-[40px] " style={{ fontWeight: 800 }}>Codoko Club</span>
                        </div>

                        {/* It should be took by Prop */}

                        <div className="clubDesc">
                            <span className="clubDescBox text-[20px]">A coding club at ABSS Institute of Technology, Meerut</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Should be done by Prop not hardcoding */}
            <div className="headerBottom flex flex-col mt-[10px] mb-[10px] mx-[110px] ">
                <div className="headerBottomUp " >
                    <span className="headerBottomUpTagline text-[16px]" style={{ fontFamily: "B612 Mono" }}>
                        <span className="text-red-700  font-extrabold">print(</span> “Codoko is a coding club at ABSS Institute of Technology, built to inspire, educate, and empower students through code...” <span className="text-red-700 font-extrabold">)</span> 


                    </span>
                </div>
                <div className="headerBottomDown mt-[20px] mb-[20px]">

                    <a href="https://imaginary-currant-995.notion.site/Constitution-of-Codoko-Club-27f8e492d1dd80f481ecf6390800d1b3?source=copy_link" target="_blank" className="viewConstitutionCodoko text-[#EF7722] text-[#EF7722]-700 border-b-2 " style={{ fontFamily: "B612 Mono" }}>View the Constitution of Codoko</a>
                </div>
            </div>
        </div>
    )
}

export default Header