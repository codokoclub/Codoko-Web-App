import { useState, useCallback, useRef } from "react";

// Sub Components Imported
import Header from "../CommonCom/Header.jsx";
import EventCont from "../CommonCom/EventCont.jsx";
import CodingEmperor from "../CommonCom/CodingEmperor.jsx";
import CouncilMember from "../CommonCom/CouncilMember.jsx";
import SocialMedia from "../CommonCom/SocialMedia.jsx";
import CouncilLoginLink from "../CommonCom/CouncilLoginLink.jsx";
import HeaderTopMost from "../CommonCom/HeaderTopMost.jsx";

function HomePage() {
    return (
        <>

            <HeaderTopMost />
            <Header />
            <EventCont />
            <CodingEmperor />
            <CouncilMember />
            <CouncilLoginLink />
            <HeaderTopMost />
            {/* <SocialMedia/> */}



        </>
    )
}

export default HomePage