

function EmperorDetails({ title, emoji, color }) {

    return (


        // Props to be Passed!

        <div className="codingEmperorRightTop">
            <div className="codingEmperorName " >
                <span className="codingEmperorAppreciationEmoji mr-3 font-extrabold" style={{ fontWeight: 1000 }}>
                    {emoji}
                </span>
                <span className={`codingEmperorNameContent `} style={{color:`${color}`, fontWeight:800}}>
                    {title}
                </span>
            </div>
        </div>


    )
}

export default EmperorDetails