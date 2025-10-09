
import { Outlet,useLocation } from "react-router-dom"
import HeaderTopMost from "./components/CommonCom/HeaderTopMost.jsx"
import CouncilLoginLink from "./components/CouncilLogin/CouncilLoginLink.jsx"
import Footer from "./components/CommonCom/Footer.jsx"
function Layout()
{
    const location = useLocation();
      const hideHeaderFooterRoutes = ["/councillogin", "/dashboard","/certificate"];
      const hideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);
    return(
    
        
      <>
   {!hideHeaderFooter && <HeaderTopMost />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
      </>

    )
}

export default Layout