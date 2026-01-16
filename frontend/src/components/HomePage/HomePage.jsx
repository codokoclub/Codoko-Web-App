import { useState, useCallback, useRef } from "react";

// Sub Components Imported
import Header from "../CommonCom/Header.jsx";
import EventCont from "./EventCont.jsx";
import CodingEmperor from "../HomePage/CodingEmperor.jsx"
import CouncilMember from "../CouncilPage/CouncilMember.jsx"
import CouncilLoginLink from "../CouncilLogin/CouncilLoginLink.jsx"


function HomePage() {
    return (
        <>
            <Header clubDisc="A coding club at ABSS Institute of Technology, Meerut" />

            <EventCont />
            <CodingEmperor />
            <CouncilMember />
            <CouncilLoginLink />
        </>
    )
}

export default HomePage