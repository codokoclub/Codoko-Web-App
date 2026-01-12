import Events from "./Events.jsx"
import CouncilMembers from "../CouncilPage/CouncilMembers.jsx"
import EmperorDetails from "../HomePage/EmperorDetails.jsx"
import EmperorSays from "../HomePage/EmperorSays.jsx"
import InputSystem from "./InputSystem.jsx"
import CouncilMember from "../CouncilPage/CouncilMember.jsx"

import { useState, useEffect, useRef } from "react"
import SocialHandles from "./SocialHandles.jsx"
function EventData() {






    const memberDetailsArray = [

      

        {
            "councilMemberImgLink": "/src/assets/dps/arju.png",
            "councilMembersName": "Mr. Ayush Kumar",
            "councilMemberDesignation": "Chairman",
            "councilMemberAcademicDetails": "B.Tech CSE, 3rd Year, 2023-2027"


        },
          {
            "councilMemberImgLink": "/src/assets/dps/mm_dp.jpeg",
            "councilMembersName": " Mr. Mohit Mishra",
            "councilMemberDesignation": "Club Coordinator",
            "councilMemberAcademicDetails": "B.Tech CSE, 2nd Year, 2024-2028"
        },
         {
      "councilMemberImgLink": "/src/assets/dps/risha_dp.jpeg",
      "councilMembersName": "Mrs. Risha Gaur",
      "councilMemberDesignation": "Club Coordinator and Developer",
      "councilMemberAcademicDetails": "B.Tech CSE, 2nd Year, 2024-2028",

    },

      
      {
            "councilMemberImgLink": "/src/assets/dps/aarzoo_dp.jpg",
            "councilMembersName": "Mr. Pankaj Kumar Ray ",
            "councilMemberDesignation": "Club Coordinator and Developer",
            "councilMemberAcademicDetails": "B.Tech CSE, 3rd Year, 2023-2027"
        },

    ]
    const [memberDetails, setMemberDetails] = useState(memberDetailsArray)





    function addData() {
        const newMember = {
            councilMemberImgLink: "/src/assets/dps/dummy.jpg",
            councilMembersName: "Mrs. Renu Sharma",
            councilMemberDesignation: "Faculty Coordinator",
            councilMemberAcademicDetails: "Associated with ABSSIT"
        };

        setMemberDetails(prev => [...prev, newMember]);
    }
    useEffect(() => {

        setMemberDetails((prev) => [...memberDetailsArray])
    }, [])


    return (
        <div className="bigCont ">

            <form action="#" method="POST" className="EventData mx-[140px]" encType="mutipart/ formdata" >
                {/* Container Title */}
                <div className="containerTitle my-3">
                    <span className="containerTitleContent text-[#F9E6FF] "
                        style={{ fontFamily: "Azeret Mono", fontWeight: 700, fontSize: "27px" }}>
                        Upcoming Event
                    </span>
                </div>

                {/* Event - Input Banner Primary */}
                {/* 
            <input
                type="file"
                accept="image/*"
                id="primaryEventBanner"
                name="inputPrimaryEventBanner"
            />

            <label for="fileInput">
                <img
                    src="src/assets/eventBanner.png"
                    alt="Upload"
                />
                <span>Update Event Image</span>
            </label> */}


                <div className="containerUpdateEventImage bg-amber-600 w-[80vw] h-[400px]">

                    <label for="fileInput" class="relative inline-block cursor-pointer">
                        {/* <img
                            src="src/assets/eventBanner.png"
                            alt="Upload"
                            height="40px"
                            class="w-full h-auto"
                            className="w-full h-[40vh]"
                        /> */}
                        <span
                            class="floatingText absolute inset-0 flex items-center justify-center 
           text-white text-lg font-semibold bg-black w-[500px]" style={{ fontFamily: "Azeret Mono" }}>
                            📂 Update Event Image
                        </span>
                    </label>

                    <input type="file" id="fileInput" class="hidden" />
                </div>


                {/* Primary Event Input Container */}

                <Events
                    eventHead="Primary Event"
                    eventTitleData="Cygnus Hackathon 2025"
                    eventDisc="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    joinLabel="Last Joining Date: "
                    joiningDate="21-09-2025"
                    eventLabel="Event Date: "
                    eventDate="2-10-2025"
                    eventJoiningLink="https://example.website.com/form/link"
                />
                <div className="containerUpdateEventImage bg-amber-600 w-[80vw] h-[400px]">

                    <label for="fileInput" class="relative inline-block cursor-pointer">
                        {/* <img
                    src="src/assets/eventBanner.png"
                    alt="Upload"
                    height="40px"
                    class="w-full h-auto"
                    className="w-full h-[40vh]"
                /> */}
                        <span
                            class="floatingText absolute inset-0 flex items-center justify-center 
           text-white text-lg font-semibold bg-black w-[500px]" style={{ fontFamily: "Azeret Mono" }}>
                            📂  Update Event Image
                        </span>
                    </label>

                    <input type="file" id="fileInput" class="hidden" />
                </div>
                <Events
                    eventHead="Secondary Event"
                    eventTitleData="Cygnus Hackathon 2025"
                    eventDisc="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                    joinLabel="Last Joining Date: "
                    joiningDate="21-09-2025"
                    eventLabel="Event Date: "
                    eventDate="2-10-2025"
                    eventJoiningLink="https://example.website.com/form/link"
                />

                <button className="bg-[#114050] border-2  border-[#1EB7EA] text-[#F5F5F5] px-12 py-3" style={{ borderRadius: "10px", fontFamily: "Nanum Gothic", fontWeight: "800" }}>
                    Update Events
                </button>
            </form>
            <div className="guidelines text-[#FFB5B5] text-[30px] text-center my-10" style={{ fontFamily: "Azeret Mono" }}>
                Just update the text and click the respective update buttons
            </div>

            {/* Coding Emperor Section */}

            <div className="codingEmperor border- flex-cols items-center mx-[140px]   flex-wrap my-[80px] " style={{ fontFamily: "Azeret Mono" }}>
                <div className="codingEmperorTop text-[27px] font-bold my-5" style={{ fontFamily: "Azeret Mono", fontWeight: "700", color: "#F9E6FF" }}>
                    <span className="codingEmperorTitle">
                        The Coding Emperor!
                    </span>
                </div>

                <div className="codingEmperorBottom flex items-center">

                    <div className="codingEmperorLeft mr-5">
                        <img src="src/assets/codingEmperor.jpg" alt="coding_emperor img not displayed"
                            className="rounded-md  , 
                    w-[270px] h-[270px] rounded-lg" />
                    </div>
                    <div className="codingEmperorRight flex flex-col justify-center items-left ml-3 text-[20px] mt-[10px]">

                        {/* <EmperorDetails title="CELESTIAL SERENITY" color="#FF5C5C" emoji="👑" /> */}

                        {/* <span className="text-[#FF5C5C]">Username: </span> */}
                        <div className="block">    <InputSystem eventTitleData="CELESTIAL SERENITY" /></div>
                        {/* <EmperorDetails title="CODING EMPEROR OF THE SEMESTER" color="#0C8CE9" emoji="🫡" /> */}


                        {/* <InputSystem eventTitleData=""/> */}
                        {/* <span className="text-[#F0FF99]">Course & Year: </span> */}
                        <div className="block">

                            <InputSystem fontColor="#F0FF99" eventTitleData="B. Tech CSE, 2nd Year" />
                        </div>


                        {/* <span className="text-[#FF25B3]">Coding Emperor: </span> */}
                        <div className="block">
                            <InputSystem fontColor="#F0FF99" eventTitleData="We have a special coding contest every year, the winner becomes EMPEROR" />
                        </div>


                    </div>
                </div>

                <div className="updateButton my-[50px]">
                    <button className="border-2 border-[#1EB7EA] px-[45px] py-[10px]  text-[16px] bg-[#114050]" style={{ fontFamily: "Nanum Gothic", borderRadius: "12px" }}>Update Coding Emperor</button>
                </div>
            </div>

            {/* Codoko Club Council Member */}

            <div className="CouncilMember mt-[80px] mx-[140px] flex-row flex-wrap ">

                <div className="CouncilMemberTitle flex justify-between font-sans text-[#F9E6FF]" style={{ fontFamily: "Azeret Mono", fontSize: "27px" }}>

                    <div className="councilMemeberTitle">
                        Codoko Club Council Members
                    </div>
                    <div className="addMoreMember cursor-pointer">
                        <button class="bg-green-600 cursor-pointer hover:bg-green-700 text-white px-5 py-1 rounded-lg transition duration-200 text-[24px]" onClick={() => { addData }}>
                            + Add Member
                        </button>
                    </div>

                </div>


                <div className="councilMemberInfo mt-3 flex-column ">

                    {
                        memberDetails.map((elem) => {

                            return <CouncilMembers w="260px" dash={true} data={elem} disp="column" />
                        })
                    }
                </div>

                <div className="updateCouncilMemberDetails my-[22px]">

                    <button className=" bg-[#114050] font-roboto border-2 text-[16px] px-[100px] py-[10px]  border-[#1EB7EA]" style={{ fontFamily: "Nanum Gothic", borderRadius: "12px" }}>Update Council Member Detail</button>
                </div>



            </div>

            {/* Social Meida */}

            <SocialHandles />





        </div>






    )
}


export default EventData