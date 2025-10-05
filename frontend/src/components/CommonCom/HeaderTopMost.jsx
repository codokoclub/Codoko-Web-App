import Sclinks from "./Sclinks.jsx";
function HeaderTopMost()
{

  const headerTopMostCenterLi = "bg-[#0D628380] text-[#FFFFFF] w-[119px] h-full text-center justify-center flex items-center";

  const headerTopMostLeftLI = "bg-[#004C6B99] w-[235px] h-[48px] flex items-center justify-center "

    return(

       <div className="headerTopMost py-[100px] px-[100px]">
                {/* <img src="/src/assets/codoko_binary.png" style={{backgroundColor:"navy"}} alt="" srcset="" height="95vh"/> */}

                <div className="headerTopMostLeft w-[235px]  h-[48px] " style={{fontWeight:700, borderRadius:"18px"}}>
                    <li className={headerTopMostLeftLI} style={{borderRadius:"18px"}}>Verify Certificate</li>
                </div>
                <div className="headerTopMostCenter box-border w-[235px] list-none   h-[48px] flex justify-between rounded-md bg-[#004C6B80]  items-center" style={{borderRadius:"18px"}}>
                    <li className={headerTopMostCenterLi} style={{borderRadius:"18px"}}>Home</li>
                    <li 
                    className={headerTopMostCenterLi}
                     style={{borderRadius:"18px"}}>About</li>
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