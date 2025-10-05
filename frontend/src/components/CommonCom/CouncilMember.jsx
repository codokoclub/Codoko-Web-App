
import { useEffect, useState } from "react"
import CouncilMembers from "./CouncilMembers.jsx"
let CouncilMember = () => {

    const memberDetailsArray = [
        
         {
            "councilMemberImgLink": "/src/assets/dps/aarzoo_dp.jpg",
            "councilMembersName": "Mr. Pankaj Kumar Ray ",
            "councilMemberDesignation": "Chairman",
            "councilMemberAcademicDetails": "B.Tech CSE, 3rd Year, 2023-2027"


        },
      
          {
            "councilMemberImgLink": "/src/assets/dps/Yuvraj.jpg",
            "councilMembersName": "Mr. Yuvraj Singh",
            "councilMemberDesignation": "Vice Chairman",
            "councilMemberAcademicDetails": "B.Tech CSE, 3rd Year, 2023-2027"
        },
        {
            "councilMemberImgLink": "/src/assets/dps/priyanshi_yadav.jpg",
            "councilMembersName": "Mrs. Priyanshi Yadav",
            "councilMemberDesignation": "Club Coordinator",
            "councilMemberAcademicDetails": "B.Tech CSE, 3rd Year, 2023-2027"


        },
       
        {
            "councilMemberImgLink": "/src/assets/dps/arju.png",
            "councilMembersName": "Mr. Ayush Kumar",
            "councilMemberDesignation": "Club Coordinator",
            "councilMemberAcademicDetails": "B.Tech CSE, 3rd Year, 2023-2027"


        },
      
        
        {
            "councilMemberImgLink": "/src/assets/dps/mm_dp.jpeg",
            "councilMembersName": " Mr. Mohit Mishra",
            "councilMemberDesignation": "Club Coordinator",
            "councilMemberAcademicDetails": "B.Tech CSE, 2nd Year, 2024-2028"
        },
        // {
        //     "councilMemberImgLink": "/src/assets/dps/dummy.jpg",
        //     "councilMembersName": "Mrs. Pooja Goel",
        //     "councilMemberDesignation": "Faculty Incharge",
        //     "councilMemberAcademicDetails": "B.Tech CSE, 2nd Year, 2024-2028"

        // },
        // {
        //     "councilMemberImgLink": "/src/assets/dps/dummy.jpg",
        //     "councilMembersName": "Mrs. Renu Sharma",
        //     "councilMemberDesignation": "Faculty Coordinator",
        //     "councilMemberAcademicDetails": "Associated with ABSSIT"
        // },
      
    ]
    const [memberDetails, setMemberDetails] = useState([])


    useEffect(() => {

        setMemberDetails((prev) => [...memberDetailsArray])
    }, [])


    return (

        // councilMemberImgLink, councilMembersName, councilMemberDesignation, councilMemberAcademicDetails
        <div className="CouncilMember my-[80px] mx-[140px] flex-row flex-wrap ">
            <div className="CouncilMemberTitle font-sans text-[#F9E6FF]" style={{ fontFamily: "Azeret Mono", fontSize:"27px" }}>
                Codoko Club Council Members
            </div>


<div className="councilMemberInfo mt-3 flex justify-between flex-wrap ">

            {
                memberDetails.map((elem) => {

                    return <CouncilMembers  data={elem} />;
                })
            }
</div>

            {/* <div className="updateCouncilMemberDetails">

                <button className="text-amber-950 font-roboto">Update Council Member Detail</button>
            </div> */}



        </div>
    )
}

export default CouncilMember