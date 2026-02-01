
import { Link, NavLink } from "react-router-dom"

function CouncilLoginLink() {
    return (
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