
import { Outlet } from "react-router-dom"
import HeaderTopMost from "./components/CommonCom/HeaderTopMost.jsx"
import Footer from "./components/CommonCom/Footer.jsx";
import { useLocation } from "react-router-dom";

const noHeaderRoutes = ['/councillogin','/certificate'];
const noFooterRoutes = ['/certificate'];


function Layout() {

  const location = useLocation();
  const hideHeader = noHeaderRoutes.includes(location.pathname);
  const hideFooter = noFooterRoutes.includes(location.pathname);

  return (
    <>
        {!hideHeader && <HeaderTopMost />}
      <Outlet />
      {!hideFooter &&<Footer />}
    </>

  )
}

export default Layout