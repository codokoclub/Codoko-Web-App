
import { useEffect, useState } from "react"
import CouncilMembers from "./CouncilMembers.jsx"
let CouncilMember = () => {

  const memberDetailsArray = [

    {
      councilMemberImgLink: "/src/assets/dps/arju.png",
      councilMembersName: "Mr. Ayush Kumar",
      councilMemberDesignation: "Chairman",
      councilMemberAcademicDetails: "B.Tech CSE, 3rd Year, 2023-2027",
      socialHandles:
        [
          {

            instagram: "https://www.instagram.com/imaarzooray/",
            linkedin: "https://www.linkedin.com/in/aarzooray/",
          },
          {

            youtube: "https://www.youtube.com/@aarzoodotin",
          },
          {

            github: "https://github.com/aarzooray",
          },
          {

            discord: "https://discord.gg/aarzooray",
          },
          {

            medium: "https://medium.com/@imaarzooray",
          }
        ],
    },
    
    {
      councilMemberImgLink: "/src/assets/dps/mm_dp.jpeg",
      councilMembersName: "Mr. Mohit Mishra",
      councilMemberDesignation: "Club Coordinator",
      councilMemberAcademicDetails: "B.Tech CSE, 2nd Year, 2024-2028",
     socialHandles:
        [
          {

            instagram: "https://www.instagram.com/imaarzooray/",
            linkedin: "https://www.linkedin.com/in/aarzooray/",
          },
          {

            youtube: "https://www.youtube.com/@aarzoodotin",
          },
          {

            github: "https://github.com/aarzooray",
          },
          {

            discord: "https://discord.gg/aarzooray",
          },
          {

            medium: "https://medium.com/@imaarzooray",
          }
        ],
    },
    {
      councilMemberImgLink: "/src/assets/dps/risha_dp.jpeg",
      councilMembersName: "Mrs. Risha Gaur",
      councilMemberDesignation: "Club Coordinator and Developer",
      councilMemberAcademicDetails: "B.Tech CSE, 2nd Year, 2024-2028",
   socialHandles:
        [
          {

            instagram: "https://www.instagram.com/imaarzooray/",
            linkedin: "https://www.linkedin.com/in/aarzooray/",
          },
          {

            youtube: "https://www.youtube.com/@aarzoodotin",
          },
          {

            github: "https://github.com/aarzooray",
          },
          {

            discord: "https://discord.gg/aarzooray",
          },
          {

            medium: "https://medium.com/@imaarzooray",
          }
        ],
    },
        {
      councilMemberImgLink: "/src/assets/dps/aarzoo_dp.jpg",
      councilMembersName: "Mr. Pankaj Kumar Ray",
      councilMemberDesignation: "Club Coordinator and Developer",
      councilMemberAcademicDetails: "B.Tech CSE, 3rd Year, 2023-2027",
      socialHandles:
        [
          {
instagram:
           "https://www.instagram.com/imaarzooray/"
          },
          {
            linkedin: "https://www.linkedin.com/in/aarzooray/"
          },
          {

            youtube: "https://www.youtube.com/@aarzoodotin"
          },
          {

            github: "https://github.com/aarzooray"
          },
          {

            discord: "https://discord.gg/aarzooray"
          },
          {

            medium: "https://medium.com/@imaarzooray"
          }
        ],
    },
    // {
    //   councilMemberImgLink: "/src/assets/dps/dummy.jpg",
    //   councilMembersName: "Mrs. Pooja Goel",
    //   councilMemberDesignation: "Faculty Incharge",
    //   councilMemberAcademicDetails: "Associated with ABSSIT",
    //   socialHandles: {
    //     instagram: "https://www.instagram.com/imaarzooray/",
    //     linkedin: "https://www.linkedin.com/in/aarzooray/",
    //     youtube: "https://www.youtube.com/@aarzoodotin",
    //     github: "https://github.com/aarzooray",
    //     discord: "https://discord.gg/aarzooray",
    //     medium: "https://medium.com/@imaarzooray",
    //   },
    // },
  
  ];

  const [memberDetails, setMemberDetails] = useState([])


  useEffect(() => {

    setMemberDetails((prev) => [...memberDetailsArray])
  }, [])


  return (

    // councilMemberImgLink, councilMembersName, councilMemberDesignation, councilMemberAcademicDetails
    <div className="CouncilMember mt-[80px] mx-[140px] flex-row flex-wrap ">
      <div className="CouncilMemberTitle font-sans text-[#F9E6FF]" style={{ fontFamily: "Azeret Mono", fontSize: "27px" }}>
        Codoko Club Council Member
      </div>


      <div className="councilMemberInfo mt-3 flex justify-between  flex-wrap items-center ">

        {
          memberDetails.map((elem) => {

            return <CouncilMembers w="140px" data={elem} wholeData={memberDetails} />;
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