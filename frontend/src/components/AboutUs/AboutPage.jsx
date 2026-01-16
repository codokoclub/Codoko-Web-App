
import AboutusDesc from "../AboutUs/AboutUsDesc.jsx"
import FoundingMember from "../AboutUs/FoundingMember.jsx"
import Header from "../CommonCom/Header.jsx"


function AboutPage() {
    return (
        <>
            <Header clubDisc="About Page" aboutPage={true} />
            <AboutusDesc />
            <FoundingMember />
            

        </>
    )
}

export default AboutPage