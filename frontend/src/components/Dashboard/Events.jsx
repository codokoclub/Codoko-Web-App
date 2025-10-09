
import { useState, useCallback, useRef } from "react"
import InputSystem from "./InputSystem"


function Events({ eventHead, eventTitleData, eventDisc, joinLabel, joiningDate, eventLabel, eventDate, eventJoiningLink }) {


    return (




        <div className="Events flex flex-col py-[50px] px-[30px] bg-[#00040D]  " style={{ fontFamily: "Azeret Mono" }}>

            <div className="eventHead text-[36px]" style={{ fontWeight: 700 }}>
                {eventHead}
            </div>

            <div className="eventData">

                {/* Event Title */}
                <div className="eventTitle my-[20px]">

                    <div className="eventTitleLabel text-[24px] text-[#6DB9FF]">
                        <span className="text-[#6DB9FF] font-extrabold">Event Title</span>
                    </div>

                    <InputSystem eventTitleData={eventTitleData} fontSize="24px" fontColor="#FF5993" />

                    {/* <div 
                    className="eventTitle text-[24px] py-[12px] text-[#FF5993] bg-[#081121B2] px-[20px] rounded-2xl flex justify-between">

                        <span 
                        className="eventTitleContent" 
                        onClick={(det)=>{set(det.target.textContent)}} 
                        ref={saveData}
                        >
                            
                        {eventTitleData}

                        </span>

                        <span 
                        className="editIcon cursor-pointer">
                        <i 
                        onClick={()=>{showContent()}}
                        class="ri-edit-line bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"></i>
                        </span>
                    </div>

                    {/* Editing System */}
                    {/* <div 
                    className="contentEditingBox my-[10px]  bg-[#0b1b37b2] rounded-2xl h-[60px] px-[20px] text-[20px] flex  flex-row justify-center align-middle items-center" 
                    style={{ display: `${show}` }}>



                        <input 
                        type="text" 
                        name="editContent" 
                        id="editContent " 
                        className="w-[100%] h-[100%] px-[10px] outline-0"
                        ref={editBoxRef} 
                        />


                        <div className="minorFeatures ">

                            <i 
                            onClick={() => {clearAll() }} 
                            class="ri-close-line px-[10px] text-[35px] text-[800] cursor-pointer hover:text-[#DC2626]-500 transition duration-300 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"></i>

                            <i 
                            onClick={() => {  btn()  }} 
                            class="ri-check-line px-[10px] text-[35px] text-[800] cursor-pointer hover:text-[#16A34A]-400 transition duration-300 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded mx-[10px]"></i>
                        </div>

                    </div>  */}

                </div>

                {/* Event Description */}
                <div className="eventDisc  my-[20px]">

                    <div className="eventDiscLabel text-[#6DB9FF] font-bold text-[24px]">
                        <span>Details</span>
                    </div>
                    <InputSystem eventTitleData={eventDisc} fontColor="#FFA159" fontFamily="Azeret Mono" fontSize="16px" />
                    {/* <div className="eventDisc my-3 bg-[#081121B2] px-[20px] py-[20px] pb-[50px]" style={{ borderRadius: "12px" }}>
                        <span className="eventDiscContent text-[16px] text-[#FFA159]" >
                            {eventDisc}
                        </span>
                    </div> */}
                </div>

                {/* Event joining and starting Date */}

                <div className="eventJoinAndStartDate  my-[20px]">

                    <div className="eventJoinLabel text-[#6DB9FF] text-[24px] text-[700]">
                        Event Dates
                    </div>

                    <div className="eventJoinAndStartContent bg-[#081121B2] py-[20px] px-[20px] " style={{ borderRadius: "18px" }}>
                        {/* Event Joining Date */}

                        <InputSystem eventTitleData="Last Joining Date: 21-09-2025
Event Date: 2-10-2025" fontColor="#6FDE57" fontSize="16px" />


                    </div>
                </div>

                {/* Event Joining Link */}

                <div className="eventJoiningLink my-[10px]">
                    <div className="eventJoiningLabel text-[#6DB9FF] text-[24px]">
                        Joining Link
                    </div>
                    <InputSystem eventTitleData={eventJoiningLink} fontSize="16px" fontColor="#6FDE57"  px="40px"/>
                    {/* <div className="eventJoiningContent bg-[#081121B2] py-[20px] px-[20px]  text-[#6FDE57] text-[16px]">
                        {eventJoiningLink}
                    </div> */}
                </div>
            </div>


        </div>
    )
}

export default Events