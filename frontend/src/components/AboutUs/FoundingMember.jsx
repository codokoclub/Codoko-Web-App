import Founders from "./Founders.jsx"

function FoundingMember() {
    return (
        <div className="FoundingMember my-[80px]">

            <div className="foundingMemberLabel text-[27px] my-[20px] text-[#F9E6FF] text-[700]">
                <span style={{fontFamily:"Azeret Mono"}}>Founding Members</span>
            </div>
            <div className="foundingMembers">
                <Founders
                dp="src/assets/dps/jatin_kr_mehta.jpg"
                fullName="Jatin Kumar Mehta"
                designation="Founder (1st Chairman)"
                academicDetails="B.Tech-CSE, 2022-26"
                desc="The main founder of Codoko Club — the visionary who first proposed the idea of establishing a coding club at ABSS Institute of Technology, Meerut. He played multiple roles in the club's foundation, serving as a leader, graphics designer, and system developer, and became the first Chairman of Codoko, leading the club from its establishment on 15 October 2023 until 4 October 2025." />

              

           
                
                <Founders 
                dp="src/assets/dps/saurabh_kumar_mishra.jpg" 
                fullName="Saurabh Kumar Mishra" 
                designation="1st Vice Chairman " 
                academicDetails="B.Tech-CSE, 2022-26"
                desc="Saurabh Kumar Mishra is one of the three founding members of Codoko Club. He contributed significantly to the club's foundation, serving as a mentor and system developer, and held the position of first Vice Chairman of Codoko, serving from 15 October 2023 to 4 October 2025." />
                     <Founders 
                dp="src/assets/dps/aarzoo_dp.jpg" 
                fullName="Pankaj Kumar Ray" 
                designation="1st Club Coordinator"
                academicDetails="B.Tech-CSE, 2023-27" 
                desc="Pankaj Kumar Ray served as the first Club Coordinator of Codoko Club and was the main developer during its founding phase, handling key development responsibilities with dedication and skill. He earned great respect from both the founding members and the entire club community. On 4 October 2025, he was appointed as the second Club Chairman by Jatin Kumar Mehta." />
            </div>
        </div>

    )
}


export default FoundingMember
