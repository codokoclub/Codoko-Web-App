import Sclinks from "./Sclinks.jsx";
import { Link, NavLink } from "react-router-dom";
import HeaderTopMostRight from "./HeaderTopMostRight.jsx";



function HeaderTopMost({ headerTopMostLeftLI, headerTopCenterStyleMod, headerTopCenterStyleMod2, socialMediaDataInfo }) {

  // socialMediaData

 const mediaDataInfo = [
  {
    id: "instagram",
    label: "Instagram",
    webAddress: "https://www.instagram.com/codokoclub/",
    class: "ri-instagram-line"
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    webAddress: "https://in.linkedin.com/company/codokoclub",
    class: "ri-linkedin-line"
  },
  {
    id: "youtube",
    label: "YouTube",
    webAddress: "https://www.youtube.com/@codokoclub",
    class: "ri-youtube-line"
  },
  {
    id: "discord",
    label: "Discord",
    webAddress: "https://discord.gg/9UrkcU4r",
    class: "ri-discord-line"
  },
  {
    id: "github",
    label: "GitHub",
    webAddress: "https://github.com/codokoclub",
    class: "ri-github-line"
  }
];


const sc = mediaDataInfo.map(
  (elem=>{
  return <Sclinks url={elem.webAddress} icon={elem.class}/>
}))


  // tailwind classes for styling
  const topCenterStyleMod = " bg-[#0D628380]  text-[20px] px-[30px] py-[15px] rounded-[18px] text-white";
  const topCenterStyleMod2 = "   text-[20px] text-[#33AAFF] px-[30px] py-[15px] rounded-[18px] ";
  const topMostLeftLI = "bg-[#004C6B99] w-[235px] h-[48px] flex items-center justify-center "



  return (
    <div
      className="flex h-[232px] px-[100px] items-center justify-between w-[100%]"
      style={{ fontFamily: "Nanum Gothic" }}
    >
      {/* Background binary text */}
      <div
        className="backgroundText bg-[#000715] absolute overflow-hidden inset-0 -z-10  top-[-100px]"
        style={{ zIndex: -10 }}
      >
        <span
          className="binaryCode text-[290px]"
          style={{
            fontWeight: 1500,
            zIndex: "-10",
            color: "#00091C",
            letterSpacing: "20px",
          }}
        >
          0101001010101010
        </span>
      </div>

      {/* Left Section */}
      <div
        className="headerTopMostLeft w-[235px] h-[48px] z-50"
        style={{ fontWeight: 700, borderRadius: "18px" }}
      >
        <li
          className={topMostLeftLI}
          style={{ borderRadius: "18px", color: "#FFFFFF", listStyle: "none" }}
        >
          <NavLink
            to="/certificate"
            className={({ isActive }) =>
              `${isActive ? "text-amber-800" : "text-cyan-300"}`
            }
            style={{ color: "#FFFFFF" }}
          >
            Verify Certificate
          </NavLink>
        </li>
      </div>

      {/* Center Navigation */}
      <div
        className="box-border w-[235px] list-none h-[48px] flex rounded-md bg-[#004C6B80] justify-between items-center"
        style={{ borderRadius: "18px" }}
      >
        {/* Home */}
        <li style={{ listStyle: "none" }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-green ${isActive ? topCenterStyleMod : topCenterStyleMod2
              }`
            }
          >
            Home
          </NavLink>
        </li>

        {/* About */}
        <li style={{ borderRadius: "18px", listStyle: "none" }}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-green ${isActive ? topCenterStyleMod : topCenterStyleMod2
              }`
            }
          >
            About
          </NavLink>
        </li>
      </div>

      {/* Right Navigation */}

     <div className="rightNavigation">
     
     {
      sc
     }
     </div>


    </div>
  );
};


export default HeaderTopMost