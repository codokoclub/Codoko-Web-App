
import { Outlet } from "react-router-dom"
import HeaderTopMost from "./components/CommonCom/HeaderTopMost.jsx"
import Footer from "./components/CommonCom/Footer.jsx";
import ScrollToTop from "./components/CommonCom/ScrollToTop.jsx";
import { useLocation } from "react-router-dom";

const noHeaderRoutes = ['/councillogin', '/certificate'];
const noFooterRoutes = ['/certificate'];


function Layout() {

  const location = useLocation();
  const hideHeader = noHeaderRoutes.includes(location.pathname);
  const hideFooter = noFooterRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!hideHeader && <HeaderTopMost />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>

  )
import { Outlet,useLocation } from "react-router-dom"
import HeaderTopMost from "./components/CommonCom/HeaderTopMost.jsx"
import CouncilLoginLink from "./components/CouncilLogin/CouncilLoginLink.jsx"
import Footer from "./components/CommonCom/Footer.jsx"
import Header from "./components/CommonCom/Header.jsx";
function Layout()
{
    const location = useLocation();
      // const hideHeaderFooterRoutes = ["/councillogin", "/dashboard","/certificate"];
      // const hideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);
    return(
    
        
      <>
   {/* {!hideHeaderFooter && <HeaderTopMost />}
      <Outlet />
      {!hideHeaderFooter && <Footer />} */}

      <HeaderTopMost/>
      <Outlet/>
      <Footer/>
      </>

    )
}

export default Layout
