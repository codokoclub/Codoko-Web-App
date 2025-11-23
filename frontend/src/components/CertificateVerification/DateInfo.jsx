function DateInfo({label,date}){
    
    return(

        <div className="DateInfo">
<label htmlFor="issuedOnCont">{label}:</label>
<span id="issuedOnCont">{date}</span>
        </div>
    )
}

export default DateInfo