


function HeaderComm({clubDesc}) {
    return (

        <div className="HeaderComm ">
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
                            <span className="clubDescBox text-[20px]">{clubDesc}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderComm