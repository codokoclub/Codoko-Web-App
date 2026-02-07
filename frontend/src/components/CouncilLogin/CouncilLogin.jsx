import LoginInput from "./LoginInput"
import { loginCouncilMember } from "../api/authService.js"
import api from "../api/axiosinstance.js";
import { useState } from "react";

function CouncilLogin() {

    const [formData,setFormData] = useState({

    })
    const handleSubmit = async(e)=>{
        e.prevantDefault();
        try {
            
            const res = await api.post("/auth/login",formData);

        } catch (error) {

            console.error(error.response?.data)
            
        }
    }

    return (
        <div className="CouncilLogin  w-[100%]">
            <div className="councilLoginHeader">
                <div className="headerLogo flex justify-center">
                    <img src="src/assets/CodokoClubLogo.png" alt="codoko_club_logo_not_displayed" width="183px" />
                </div>
                <div className="headerName text-[40px] text-center" style={{fontFamily:"JetBrains Mono",fontWeight:800}}>
                    <span style={{fontFamily:"B612 Mono"}}>

                        CODOKO COUNCIL LOGIN
                    </span>
                </div>
                <div className="headerDesc text-[20px] text-center" style={{fontFamily:"Jaldi"}}>
                    <span>

                        This login is for Codoko Club Council Members Only!
                    </span>
                </div>

            </div>
            
            <div className="councilLoginForm">
                <form onSubmit={handleSubmit}>
                    <div className="councilLoginUpper flex flex-col items-center">

                    <LoginInput type="text" name="councilId" placeholder="Council ID"  />
                    <LoginInput type="password" name="password" placeholder="Password" eye="ri-eye-line" noteye="ri-eye-off-line" />
                    </div>
                    <div className="councilLoginLower mt-[40px] flex justify-center">
                        <input type="submit" value="Login" className="w-[187px] h-[48px] border-2 border-[#B277FF] bg-[#3E1E68] text-[18px] cursor-pointer" style={{borderRadius:"18px",borderWeight:"2px",fontFamily:"Jaldi",fontWeight:"800"}}  />
                    </div>
                </form>


            </div>
            <div className="councilLoginFooter flex justify-center mt-[20px]"style={{fontFamily:"Jaldi",fontSize:"20px",color:"#5E2F9B"}}>

               <span>In case you’ve forgotten your ID or Password, you may need to contact a Club Coordinator</span>
            </div>
        </div>
    )
}

export default CouncilLogin