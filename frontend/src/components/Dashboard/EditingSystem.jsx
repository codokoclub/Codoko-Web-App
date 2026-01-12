

// importing the required hooks

import { useState, useCallback, useRef } from "react";




// function to render (as a component)

function EditingSystem() {

    //* logics

    const [text, setText] = useState("");


    const [show, setShow] = useState('none')


    const editBoxRef = useRef('')

    const saveData = useRef('')

    
    function showContent() {
        setShow((prev) => prev == 'none' ? 'block' : 'none')
    }


    function set(text) {

        setText((prev) => text)
        editBoxRef.current.value = text
    }


    function clearAll() {
        console.log("Clear the content");
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
            showContent
    }, [saveData])

    console.log(text)



    return (
        <div className="Test my-6 h-[500px]" style={{ fontFamily: "B612 Mono", }}>

            {/* TEXT BOX */}

            <div className="textBox">

                <span ref={saveData
                } className="textToEdit border-2 px-4 py-3 text-[20px]" style={{ borderRadius: "12px", background: "darkblue" }} onClick={(dets) => { set(dets.target.textContent) }}>
                    Programming is the Formal Language
                </span>

                <span>
                    <i class="ri-edit-fill text-3xl text-cyan-50" onClick={()=>{showContent()}}></i>

                </span>
            </div>


            {/* TEXT EDITING BOX */}
            <div className="box my-10  flex-col cursor-pointer "  style={{display:`${show}`}}>

            <label htmlFor="editingBox" className="text-amber-100 text-2xl">Edit Here</label>

            <div className="oneLiner flex bg-white rounded-3xl justify-between pr-4">

                <input type="text" id="editingBox" className="w-[400px] px-2 h-[40px] bg-amber-200 rounded-xl text-gray-950" ref={editBoxRef}
                />

                <i


                    onClick={() => { btn() }}
                    className="ri-save-fill text-4xl text-green-700 mx-[20px] hover:text-amber-300 transition" style={{display:"flex"}}></i>


                <i


                    onClick={() => { clearAll() }}
                    className="ri-close-circle-fill mx-[10px] text-4xl text-green-700 hover:text-amber-300 transition"></i>
            </div>
        </div>
        </div >
    )
}


// exporting the component to be used in another page or component
export default EditingSystem