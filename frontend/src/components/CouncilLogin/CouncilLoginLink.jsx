
import { Link, NavLink } from "react-router-dom"

function CouncilLoginLink() {
    return (
        <div className="CouncilLoginLink flex justify-center items-center w-full py-6" >

            <span className="text-[#ACFF47] font-bold border-2 border-[#ACFF47] px-6 py-3 rounded-lg hover:bg-[#ACFF47] hover:text-[#000715] transition-all duration-300 shadow-lg shadow-[#ACFF47]/50" style={{ fontFamily: "Azeret Mono", fontSize: "20px" }}>
        <div className="CouncilLoginLink px-[140px]   " >

            <span className="text-[#ACFF47]-700 font-bold  border-b-1 border-b-[#ACFF47]" style={{ color: "#ACFF47", fontFamily: "Azeret Mono", fontSize: "20px" }}>


                <Link to="/councillogin">
                    Council Login
                </Link>
            </span>
        </div>
    )
}

export default CouncilLoginLink
