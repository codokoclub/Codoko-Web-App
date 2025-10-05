

function EmperorSays({ courseAndYear, saying }) {

    return (


        // Props to be Passed!

        <div className="codingEmperorRightBottom my-6 ">
            <div className="codingEmperorAcademicDetail flex flex-col">
                <span className="codingEmperorCourseAndYear"style={{color:"#F0FF98"}} >
                    <span className="academicDetailsLabel" >
                        Course & Year:
                    </span>
                    {/* Prop to be passed */}
                    <span className="academicDetailsContent">
                        {courseAndYear}
                    </span>
                </span>
                <span className="codingEmperorSays">
                    <span className="codingEmperorSaysLabel text-[#FF25B3]" >
                        Coding Emperor:
                    </span>
                    {/* Prop to be passed */}
                    <span className="codingEmperorSaysContent" style={{color:"#F0FF98"}}>
                        {saying}
                    </span>
                </span>
            </div>

        </div>


    )
}

export default EmperorSays