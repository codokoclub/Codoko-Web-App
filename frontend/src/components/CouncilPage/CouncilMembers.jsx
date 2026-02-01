import Sclinks from "../CommonCom/Sclinks"
import InputSystem from "../Dashboard/InputSystem"


function CouncilMembers({ w, data, dash, disp ,wholeData}) {

// const scMed = wholeData.map((elem)=>{

//     console.log(typeof elem.socialHandles);
//     });

    return (

        <div className="CouncilMembers flex  my-[10px]  flex-row"  >
            <div className="CouncilMemberLeft">

                <img
                    src={data.councilMemberImgLink}

                    className="cursor-pointer  hover:scale-95 transition duration-500 delay-200 ease-in-out"
                    style={
                        {
                            objectFit: "center",
                            height: `${w}`,
                            width: `${w}`,
                            // width: "100%",
                            borderRadius: "9px",

                        }
                    }
                    alt="council_member image not displayed"
                />

            </div>


            <div
                className="CouncilMemberRight   ml-7  flex flex-col flex-wrap justify-center    "
                style={{ fontFamily: "Azeret Mono", fontSize: "20px" }}
            >

                <div className="CouncilMemberName my-[5px]  text-[#47B3AF] font-bold uppercase" style={{ fontWeight: 700 }}>
                    {/* {data.councilMembersName} */}
                    {dash ?
                        <InputSystem eventTitleData={data.councilMembersName} />
                        :
                        data.councilMembersName

                    }

                </div>
                <div className="CouncilMemberDesignation my-[5px]  text-[#FF6B94]">

                    {dash ?
                        <InputSystem eventTitleData={data.councilMemberDesignation} />
                        :
                        data.councilMemberDesignation
                    }


                </div>
                <div className="CouncilMemberAcademicDetails my-[5px]  text-[#EFC0FF] flex-wrap">
                    {dash ?
                        <InputSystem eventTitleData={data.councilMemberAcademicDetails} />
                        :
                        data.councilMemberAcademicDetails

                    }


                </div>
                <div className="councilMemberSocialHandles bg-amber-400">

{/* {scMed} */}
 


                </div>

            </div>
        </div>
    )
}

export default CouncilMembers