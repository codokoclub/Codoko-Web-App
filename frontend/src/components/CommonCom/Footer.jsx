
function Footer() {
    return (
        <div className=" w-[99vw]  bg-[#000715]  footer "  >

            <div
                className="binaryCode  "
                style=
                {
                    { fontWeight: 800, zIndex: "0", color: "#00091C", letterSpacing: "10", overflow: "hidden" }
                }
            >

                {/* content to display in the footer */}

                0101010
            </div>
        </div>

function Footer() {
    return (



        <div className="footer w-[100vw] bg-[#000715]"  >
           
            <span className="binaryCode text-[290px] w-[100%] " style={{ fontWeight: 1500, zIndex: "-10", color: "#00091C", letterSpacing: "20px" }}>0101001010</span>
        </div>
        /*
        <div >
        className="  absolute inset-0 -z-10 top-[-100px]  " style={{ zIndex: -10 }}>

            <span className="binaryCode text-[290px] " style={{ fontWeight: 1500, zIndex: "-10", color: "#00091C", letterSpacing: "20px" }}>0101001010101010</span>


        </div>
*/
    )
}

export default Footer
