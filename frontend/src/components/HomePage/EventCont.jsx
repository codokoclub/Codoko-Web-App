import EventDetails from "./EventDetails.jsx"


function EventCont() {

    const imgLink = "/src/assets/eventBanner.png";

    return (
        <div className="eventContainer flex flex-col my-[60px]">

            {/* First Part - Dashboard */}
            <div className="containerTitle my-3">
                <span className="containerTitleContent text-[#F9E6FF] " style={{ fontFamily: "Azeret Mono", fontWeight: 700, fontSize: "27px" }}>
                    Upcoming Event
                </span>
            </div>




            {/* First Part - Dashboard  End here*/}

            {/* Event Details PROP */}
            <EventDetails
                imgLink="src/assets/eventBanner.png"
                eventTitle="Cygnus Hackathon 2025"
                eventLabel="Event Date: "
                joinLabel="Last Joining Date:  "
                eventDisc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                joiningDate="21-09-2025"
                eventDate="2-10-2025" />

            <EventDetails
                imgLink="src/assets/cpu.png"
                eventTitle="NightOps Session: 09.25"
                eventLabel="Session Date/Time: "
                joinLabel="Duration: "
                eventDisc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                joiningDate="1 Hrs"
                eventDate="21-09-2025 9:00 PM" />



        </div>


    )
}

export default EventCont