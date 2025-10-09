import Sclinks from "./Sclinks.jsx";
import { Link, NavLink } from "react-router-dom";

function HeaderTopMost() {

    // tailwind classes for styling
 
 const headerTopCenterStyleMod = " bg-[#0D628380]  text-[20px] px-[30px] py-[15px] rounded-[18px] text-white";
 const headerTopCenterStyleMod2 = "   text-[20px] text-[#33AAFF] px-[30px] py-[15px] rounded-[18px] ";


    const headerTopMostLeftLI = "bg-[#004C6B99] w-[235px] h-[48px] flex items-center justify-center "


    return (

        <div className="flex h-[232px] px-[100px] items-center justify-between w-[100%] " style={{ fontFamily: "Nanum Gothic" }}>
            {/* <img src=" /src/assets/codoko_binary.png" style={{backgroundColor:"navy"}} alt="" srcset="" height="95vh"/> */}

            <div className="backgroundText bg-[#000715] absolute inset-0 -z-10 top-[-100px]  " style={{ zIndex: -10 }}>
                <span className="binaryCode text-[290px] " style={{ fontWeight: 1500, zIndex: "-10", color: "#00091C", letterSpacing: "20px" }}>0101001010101010</span>
            </div>

            <div className="headerTopMostLeft w-[235px]  h-[48px] z-50 " style={{ fontWeight: 700, borderRadius: "18px" }}>
                <Link to="#">

                    <li className={headerTopMostLeftLI} style={{ borderRadius: "18px", color: "#FFFFFF" }}>

                        <NavLink
                            to="/verifycertificate"
                            className={
                                ({ isActive }) => `${isActive ? "text-amber-800" : "text-cyan-300"}`
                            }
                            style={{ color: "#FFFFFF" }}
                        >


                            Verify Certificate
                        </NavLink>

                    </li>
                </Link>
            </div>
            <div
                className=" box-border w-[235px] list-none   h-[48px] flex rounded-md bg-[#004C6B80] justify-between items-center"
                style={{ borderRadius: "18px" }}>


                {/* Home navigation bUtton */}
                <li >

                    <NavLink

                        to="/"
                        //  className={headerTopCenterStyleMod}

                        className={
                            ({ isActive }) => `
                text-green ${isActive ? headerTopCenterStyleMod : headerTopCenterStyleMod2}`
            }

                    >
                        Home
                    </NavLink>



                </li>

                {/* About Navigation Button */}
                <li
                    
                    style={{ borderRadius: "18px" }}>

                    <NavLink
                        to="/about"

                
                       className={
                            ({ isActive }) => `
                text-green ${isActive ? headerTopCenterStyleMod : headerTopCenterStyleMod2}`
                       }
                    >


                        About
                    </NavLink>





                </li>
                {/* Central Navigation ENds here */}
            </div>

            <div className="headerTopMostRight  ">

                <Sclinks url="https://www.instagram.com/codokoclub/" icon="ri-instagram-line" />

                <Sclinks url="https://www.linkedin.com/codokoclub/" icon="ri-linkedin-box-fill" />

                <Sclinks url="https://www.youtube.com/@codokoclub/"
                    icon="ri-youtube-fill" />

                <Sclinks url="https://discord.gg/AzYnAnAJ"
                    icon="ri-discord-fill" />
                <Sclinks url="https://github.com/codokoclub"
                    icon="ri-github-fill" />
            </div>



        </div>
    )
}
export default HeaderTopMost