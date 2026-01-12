

function SocialMediaAccount({ icon, link }) {


    return (

        <div className="SocialMediaAccount  flex items-center gap-5 text-[24px] bg-[#081121B2] " >

            <div className="scMediaIcon text-[30px]">

                <i class={icon} ></i>
            </div>

            <div className="socialLink text-[#FF5993]">
                {link}
            </div>

        </div>
    )
}
export default SocialMediaAccount