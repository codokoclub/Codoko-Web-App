

function EventDetails({ imgLink, eventTitle, eventLabel, joinLabel, eventDisc, joiningDate, eventDate }) {
    return (


        <div className="eventTitleCont" style={{
            fontFamily: "Azeret Mono",
            fontWeight: 700,
            backgroundColor: "rgba(0, 9, 28, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "20px",
            marginBottom: "24px"
        }}>
            <div className={`eventBanner my-5 h-[236px] bg-transparent bg-cover`} style={{
                borderRadius: "21px",
                backgroundImage: `url(${imgLink})`,
                backgroundPosition: "center"
            }}>
            </div>

            <div className="eventTitleLabel">

            </div>

            <div className="eventTitle text-[25px] text-[#FF5C5C] mb-3" style={{ lineHeight: "1.2" }}>
                <span className="eventTitleContent">
                    {eventTitle}
                </span>
            </div>
            <div className="eventDesc my-3" style={{
                paddingLeft: "8px",
                paddingRight: "8px",
                maxWidth: "100%"
            }}>
                <span className="eventDiscContent text-[16px] text-[#F0FF99]" style={{
                    display: "block",
                    lineHeight: "1.6"
                }}>
                    {eventDisc}
                </span>
            </div>
            <div className="eventMetadata flex flex-col gap-2 my-4">
                <div className="joiningDate text-[#00ff00] flex flex-wrap items-center gap-2">
                    <div className="joiningDateLabel font-semibold">
                        {joinLabel}
                    </div>
                    <div className="joiningDateContent">
                        {joiningDate}
                    </div>
                </div>
                <div className="eventDateInfo text-[#00ff00] flex flex-wrap items-center gap-2">
                    <div className="eventDateLabel font-semibold">
                        {eventLabel}
                    </div>
                    <div className="eventDateContent">
                        {eventDate}
                    </div>
                </div>
            </div>
            <div className="joinEvent my-3">
                <button className="px-[15px] text-[16px] rounded-lg py-[8px] bg-[#160000] min-w-fit" style={{
                    cursor: "pointer",
                    border: "2px solid #FFC885",
                    minWidth: "fit-content",
                    height: "auto",
                    minHeight: "40px",
                    lineHeight: "1.5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    whiteSpace: "nowrap"
                }}>Join Event</button>
            </div>

        </div>


    )
}

export default EventDetails