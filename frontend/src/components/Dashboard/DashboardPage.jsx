
import HeaderComm from "../CommonCom/HeaderComm.jsx"
import CouncilLogoutBtn from "../Dashboard/CouncilLogoutBtn.jsx"
import EventData from "./EventData.jsx"
import EditingSystem from "./EditingSystem.jsx"
import LoginBtn from "../CouncilLogin/LoginBtn.jsx"
import Footer from "../CommonCom/Footer.jsx"

function DashboardPage() {

    return (
        <div className="dashboardPage    ">
            {/* <EditingSystem /> */}
            <LoginBtn txt="Council Logout" />
            <HeaderComm clubDesc="Council Dashboard" />
            <EventData />

        </div>

    <div className="dashboardPage    ">

{/* <EditingSystem/> */}
        <LoginBtn txt="Council Logout"/>
        <HeaderComm clubDesc="Council Dashboard" />
        <EventData />
        <Footer/>
    </div>
    
    )

}

export default DashboardPage
