
import { useState, useRef, useEffect } from "react"
import SocialMediaAccount from "./SocialMediaAccount.jsx"
import InputSystem from "./InputSystem.jsx"


function SocialHandles() {

    const socialMediaData = [
        {
            name: "Instagram",
            icon: "ri-instagram-line",
            link: "www.instagram.com/codokoclub"
        },
        {
            name: "LinkedIn",
            icon: "ri-linkedin-box-fill",
            link: "www.linkedin.com/codokoclub"
        },
        {
            name: "Youtube",
            icon: "ri-youtube-fill",
            link: "www.youtube.com/codokoclub"
        },
        {
            name: "Discord",
            icon: "ri-discord-fill",
            link: "www.discord.gg/AzYnAnAJ"
        },
        {
            name: "Github",
            icon: "ri-github-fill",
            link: "www.github.com/codokoclub"
        },
    ]
    return (

        <div className="SocialHandles bg-[#00040D]  mx-[140px]" style={{ fontFamily: "Azeret Mono" }}>

            <div className="heading text-[36px]" >
                <span>Social Handles</span>
            </div>
            <div className="socialLinks  h-[100%] z-20">

                {
                    socialMediaData.map((elem) => {
                        return <span className="flex flex-col  my-[20px] flex justify-start">

<div className="upper flex items-center">

                            <i class={elem.icon} style={{fontSize:"35px",paddingLeft:"12px"}}></i>
                            <span className="ml-[9px] text-[15px]">{elem.name}</span>
</div>
                            <InputSystem  eventTitleData={elem.link} />
                        </span>
                    })
                }



            </div>





            <div className="updateSocialLinks ">

                <button className="bg-[#114050] font-roboto border-2 text-[16px] px-[100px] py-[10px]  border-[#1EB7EA]"
                    style={{ fontFamily: "Nanum Gothic", borderRadius: "12px" }}>

                    Update Social Links
                </button>
            </div>
        </div>
    )
}

export default SocialHandles