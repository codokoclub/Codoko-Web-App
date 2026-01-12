

function EventDetails({ imgLink, eventTitle, eventLabel, joinLabel, eventDisc, joiningDate, eventDate }) {
    return (


        <div className="eventTitleCont" style={{ fontFamily: "Azeret Mono", fontWeight: 700 }}>
            <div className={`eventBanner my-5  h-[236px] bg-amber-600  bg-cover `} style={{borderRadius:"21px" ,backgroundImage: `url(${imgLink})`, backgroundPosition:"center" }}>


            </div>

            <div className="eventTitleLabel">

            </div>

            <div className="eventTitle text-[25px] text-[#FF5C5C] ">
                <span className="eventTitleContent">
                    {eventTitle}
                </span>
            </div>
            <div className="eventDesc my-3">
                <span className="eventDiscContent text-[16px] text-[#F0FF99]" >
                    {eventDisc}

                </span>
            </div>
            <div className="joiningDate text-[green] flex ">
                <div className="joiningDateLabel mr-2">
                    {joinLabel}
                </div>
                <div className="joiningDateContent">
                    {joiningDate}
                </div>
            </div>
            <div className="joiningDate flex text-[green] flex">
                <div className="eventDateLabel mr-2">
                    {eventLabel}
                </div>
                <div className="eventDateContent">
                    {eventDate}
                </div>
            </div>
            <div className="joinEvent my-3" >
                <button className="  px-[15px] text-[16px] rounded-mg py-[8px] bg-[#160000] w-[155px] h-[40px]"style={{cursor:"pointer"}} >Join Event</button>
            </div>

        </div>


    )
}

export default EventDetails