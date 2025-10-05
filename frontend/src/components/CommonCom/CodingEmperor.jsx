
import { useState, useCallback, useRef } from "react"
import EmperorDetails from "./EmperorDetails"
import EmperorSays from "./EmperorSays"

function CodingEmperor() {

    const [state, setState] = useState(0)

    return (

        <div className="codingEmperor flex-cols items-center  mx-[140px] flex-wrap my-[80px] " style={{fontFamily:"Azeret Mono"}}>
            <div className="codingEmperorTop text-[27px] font-bold my-5" style={{fontFamily:"Azeret Mono",fontWeight:"700",color:"#F9E6FF"}}>
                <span className="codingEmperorTitle">
The Coding Emperor!
                </span>
            </div>

            <div className="codingEmperorBottom flex items-center">

            <div className="codingEmperorLeft">
                <img src="src/assets/codingEmperor.jpg" alt="coding_emperor img not displayed" 
                className="ounded-md  , 
                    w-[148.22476196289062px] rounded-lg" />
            </div>
            <div className="codingEmperorRight flex flex-col justify-center items-left ml-3 text-[20px] mt-[10px]">
                <EmperorDetails title="CELESTIAL SERENITY" color="#FF5C5C" emoji="👑" />
                <EmperorDetails title="CODING EMPEROR OF THE SEMESTER"  color="#0C8CE9" emoji="🫡" />

                <EmperorSays courseAndYear="B.Tech CSE, 2nd Year" saying="We have a special coding contest every year, the winner becomes EMPEROR!" />
            </div>
            </div>
        </div>
    )
}
export default CodingEmperor