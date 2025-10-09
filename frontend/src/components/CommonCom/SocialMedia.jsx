

function SocialMedia() {
    return (
        <div className="SocialMediaCont ">
            <div className="containerTitle">
                <span>Social Handles</span>
            </div>

            <div className="socialHandlesCont">
                <div className="socialHandles">
                    <div className="socialHanldesIcon">
                        <img src="./src/assets/InstagramLogo.png" alt="instagram logo not displayed" />
                    </div>
                    <div className="socialHanldesLink">

                        <a href="https://www.instagram.com/codokoclub/" target="_blank" alt="codoko instagram link not working" >https://www.instagram.com/codokoclub/</a>

                    </div>
                </div>
            </div>
            {/* <div className="updateSocialHandles">
                <button>Update Social Links</button>
            </div> */}
        </div>
    )
}

export default SocialMedia