
function Sclinks({ url, icon }) {


    return (

        <a href={url} target="_blank" className="cursor-pointer text-[20px] sm:text-[22px] md:text-[24px] text-white hover:text-[#33AAFF] transition-colors flex-shrink-0">
            <i class={icon} ></i>
        </a>
    )

}

export default Sclinks