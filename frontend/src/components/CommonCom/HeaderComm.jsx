

function HeaderComm({ clubDesc }) {
    return (

        <div className="HeaderComm relative z-10 mt-[60px]">
            <div className="headerMiddle mb-[20px] mx-4 sm:mx-8 md:mx-[40px] lg:mx-[140px]" style={{ fontFamily: "Nanum Gothic" }}>

                <div className="codokoDetails flex flex-col sm:flex-row items-center sm:items-center">
                    <div className="codokoDetailLeft mb-4 sm:mb-0">
                        <div className="codokoLogo sm:mr-4">
                            <img src="/src/assets/CodokoClubLogo.png" className="w-[80px] h-[80px] sm:w-[109px] sm:h-[109px]" alt="codoko_club logo not displayed" />
                        </div>
                    </div>
                    <div className="codokoDetailRight text-center sm:text-left">
                        <div className="clubName">
                            <span className="clubNameBox text-[20px] min-[426px]:text-[24px] sm:text-[36px] md:text-[40px] leading-tight" style={{ fontWeight: 800 }}>Codoko Club</span>

function HeaderComm({clubDesc}) {
    return (

        <div className="HeaderComm">
            <div className="headerMiddle  mb-[20px] mx-[80px] " style={{ fontFamily: "Nanum Gothic" }}>

                <div className="codokoDetails flex flex-row items-center">
                    <div className="codokoDetailLeft">
                        <div cheaderlassName="codokoLogo mr-4">
                            <img src="/src/assets/CodokoClubLogo.png" className="w-[109px] height-[109px]" alt="codoko_club logo not displayed" srcset="" />
                        </div>
                    </div>
                    <div className="codokoDetailRight">
                        <div className="clubName">
                            <span className="clubNameBox text-[40px] " style={{ fontWeight: 800 }}>Codoko Club</span>
                        </div>

                        {/* It should be took by Prop */}

                        <div className="clubDesc">
                            <span className="clubDescBox text-[12px] min-[426px]:text-[14px] sm:text-[18px] md:text-[20px]">{clubDesc}</span>
                        </div>
                    </div>
                            <span className="clubDescBox text-[20px]">{clubDesc}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderComm
