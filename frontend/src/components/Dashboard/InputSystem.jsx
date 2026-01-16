import { useState, useEffect, useRef, useCallback } from "react"


function InputSystem({ eventTitleData, fontColor, fontSize, fontFamily, height, px, py }) {


    // creating some states to store the data 

    const [content, setContent] = useState("");
    const [show, setShow] = useState('none');

    // creating some reference to manipulate the dom easily

    const editBoxRef = useRef(null)
    const saveData = useRef(null)

    // * Features Method Definition

    function showContent() {
        setShow((prev) => prev == 'none' ? 'flex' : 'none')
    }


    function set(text) {
        setContent((prev) => text)
        console.log(content)
        editBoxRef.current.value = text
    }

    function clearAll() {
        editBoxRef.current.value = null
        console.log(editBoxRef.value)
    }

    function btn(content) {
        let temp = editBoxRef.current.value
        let dataToBeSaved = saveData.current.textContent
        saveData.current.innerText = temp
    }

    //* handling or avoiding side renders
    useCallback(() => {
        set(),
            btn(),
            showContent()
    }, [saveData])

    return (

        <div className="InputSystem">
            <div
                className="eventTitle  py-[12px] text-[#FF5993] bg-[#081121B2] px-[20px] rounded-2xl flex justify-between" style={{ fontSize: `${fontSize}`, height: `${height}`, color: `${fontColor}`, paddingLeft: `${px}` }}>

                <span
                    className="eventTitleContent"
                    onClick={(det) => { set(det.target.textContent) }}
                    ref={saveData}
                >

                    {eventTitleData}

                </span>

                <span
                    className="editIcon cursor-pointer">
                    <i
                        onClick={() => { showContent(), set(saveData.current.textContent) }}
                        class="ri-edit-line bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"></i>
                </span>
            </div>

            {/* Editing System */}
            <div
                className="contentEditingBox my-[10px]  bg-[#0b1b37b2] rounded-2xl h-[60px] px-[20px] text-[20px] flex  flex-row justify-center align-middle items-center"
                style={{ display: `${show}` }}>



                <input
                    type="text"
                    name="editContent"
                    id="editContent "
                    className="w-[100%] h-[100%] px-[10px] outline-0"
                    ref={editBoxRef}
                />


                <div className="  minorFeatures " >

                    <i
                        onClick={() => { clearAll() }}
                        class="ri-close-line  px-[10px] text-[35px] text-[800] cursor-pointer hover:text-[#DC2626]-500 transition duration-300 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"></i>

                    <i
                        onClick={() => { btn() }}
                        class="ri-check-line px-[10px] text-[35px] text-[800] cursor-pointer hover:text-[#16A34A]-400 transition duration-300 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded mx-[10px]"></i>
                </div>

            </div>
        </div>
    )
}

export default InputSystem