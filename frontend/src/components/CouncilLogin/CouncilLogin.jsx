import LoginInput from "./LoginInput"


function CouncilLogin() {

    return (
        <div className="CouncilLogin w-full flex flex-col items-center px-4 sm:px-8 md:px-[80px] lg:px-[140px] mt-20 mb-20">
            <div className="councilLoginHeader w-full flex flex-col items-center">
                <div className="headerLogo flex justify-center mb-4">
                    <img src="src/assets/CodokoClubLogo.png" alt="codoko_club_logo_not_displayed" className="w-[120px] sm:w-[150px] md:w-[183px]" />
                </div>
                <div className="headerName text-[24px] sm:text-[32px] md:text-[40px] text-center leading-tight mb-2" style={{ fontFamily: "JetBrains Mono", fontWeight: 800 }}>
                    <span style={{ fontFamily: "B612 Mono" }}>

                        CODOKO COUNCIL LOGIN
                    </span>
                </div>
                <div className="headerDesc text-[16px] sm:text-[18px] md:text-[20px] text-center px-4" style={{ fontFamily: "Jaldi" }}>
                    <span>

                        For Codoko Council Members Only!
                    </span>
                </div>

            </div>

            <div className="councilLoginForm">
                <form action="" method="post">
                    <div className="councilLoginUpper flex flex-col items-center">

                        <LoginInput type="text" name="Council Id" placeholder="Council ID" />
                        <LoginInput type="password" name="password" placeholder="Password" eye="ri-eye-line" noteye="ri-eye-off-line" />
                    </div>
                    <div className="councilLoginLower mt-[40px] flex justify-center">
                        <input type="submit" value="Login" className="w-[187px] h-[48px] border-2 border-[#B277FF] bg-[#3E1E68] text-[18px] cursor-pointer" style={{ borderRadius: "18px", borderWeight: "2px", fontFamily: "Jaldi", fontWeight: "800" }} />
                    </div>
                </form>


            </div>
            <div className="councilLoginFooter flex justify-center mt-[20px] text-center px-4" style={{ fontFamily: "Jaldi", color: "#5E2F9B" }}>
                <span className="text-[14px] sm:text-[16px] md:text-[20px]">In case you’ve forgotten your ID or Password, you may need to contact a Club Coordinator</span>
            </div>
        </div>
    )
}

export default CouncilLogin