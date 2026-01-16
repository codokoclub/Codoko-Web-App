import Sclinks from "./Sclinks.jsx";
import { NavLink, useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import HeaderTopMostRight from "./HeaderTopMostRight.jsx";



function HeaderTopMost({ headerTopMostLeftLI, headerTopCenterStyleMod, headerTopCenterStyleMod2, socialMediaDataInfo }) {

  const location = useLocation();
  const activeTab = location.pathname === "/" ? "home" : "about";

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
    (elem => {
      return <Sclinks url={elem.webAddress} icon={elem.class} />
    }))


  // tailwind classes for styling
  const topCenterStyleMod = " bg-[#0D628380] text-[16px] sm:text-[18px] md:text-[20px] px-[20px] sm:px-[25px] md:px-[30px] py-[12px] sm:py-[13px] md:py-[15px] rounded-[18px] text-white";
  const topCenterStyleMod2 = " text-[16px] sm:text-[18px] md:text-[20px] text-[#33AAFF] px-[20px] sm:px-[25px] md:px-[30px] py-[12px] sm:py-[13px] md:py-[15px] rounded-[18px] ";
  const topMostLeftLI = "bg-[#004C6B99] w-full h-[48px] flex items-center justify-center "
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
      className="flex h-auto min-h-[120px] px-4 sm:px-8 md:px-[60px] lg:px-[100px] py-6 items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[40px] w-[100%] flex-wrap relative"
      className="flex h-[232px] px-[100px] items-center justify-between w-[100%]"
      style={{ fontFamily: "Nanum Gothic" }}
    >
      {/* Background binary text */}
      <div
        className="backgroundText bg-[#000715] absolute overflow-hidden -z-10 inset-0 flex items-center justify-center"
        style={{ zIndex: -10 }}
      >
        <span
          className="binaryCode text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]"
        className="backgroundText bg-[#000715] absolute overflow-hidden inset-0 -z-10  top-[-100px]"
        style={{ zIndex: -10 }}
      >
        <span
          className="binaryCode text-[290px]"
          style={{
            fontWeight: 1500,
            zIndex: "-10",
            color: "#00091C",
            letterSpacing: "8px",
            opacity: 0.7
            letterSpacing: "20px",
          }}
        >
          0101001010101010
        </span>
      </div>

      {/* Navigation Container - stacks on small screens */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 w-full lg:w-auto">
        {/* Center Navigation - First row on mobile */}
        <div
          className="box-border w-full sm:w-[200px] md:w-[235px] list-none h-[48px] flex rounded-md bg-[#004C6B80] justify-between items-center relative"
          style={{ borderRadius: "18px" }}
          data-active={activeTab}
        >
          {/* Home */}
          <li style={{ listStyle: "none", flex: 1, zIndex: 2 }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-green block text-center transition-colors duration-300 ${isActive ? "text-white" : "text-[#33AAFF]"
                }`
              }
              style={{
                fontSize: "clamp(16px, 4vw, 20px)",
                padding: "12px 20px"
              }}
            >
              Home
            </NavLink>
          </li>

          {/* About */}
          <li style={{ borderRadius: "18px", listStyle: "none", flex: 1, zIndex: 2 }}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-green block text-center transition-colors duration-300 ${isActive ? "text-white" : "text-[#33AAFF]"
                }`
              }
              style={{
                fontSize: "clamp(16px, 4vw, 20px)",
                padding: "12px 20px"
              }}
            >
              About
            </NavLink>
          </li>
        </div>

        {/* Left Section - Second row on mobile */}
        <div
          className="headerTopMostLeft w-full sm:w-[200px] md:w-[235px] h-[48px] z-50"
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
      </div>

      {/* Right Navigation - Always visible, horizontal layout */}
      <div className="relative">
        {/* Social icons - always visible, horizontal, responsive */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {sc}
        </div>
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
