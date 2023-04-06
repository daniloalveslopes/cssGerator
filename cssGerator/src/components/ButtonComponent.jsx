import { useState } from "react"
import { Btn } from "../styles"
 export const ButtonComponent = () => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [color, setColor] = useState();
    const [BG, setBG] = useState();
    function changeWidth(e) {
        setWidth(e.target.value)
    }
    function changeHeight(e) {
        setHeight(e.target.value)
    }
    function changeColor(e) {
        setColor(e.target.value)
    }
    function changeBg(e) {
        setBG(e.target.value)
    }
    return (
        <main className="main flex max-sm:flex-col">
                <div className="h-full leftMain w-1/2 flex items-center border-r-2 border-blue-700 max-sm:border-r-0 max-sm:w-full max-sm:h-1/2 max-sm:border-b-2">
                    <div className="changes flex flex-col p-5 w-full items-center">
                            <label htmlFor="rangeWidth" 
                            className="w-1/2 max-sm:w-full max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12  max-2xl:w-10/12">Width: </label>
                            <input type="range" name="Width" min="200" max="300"id="rangeWidth" onChange={changeWidth} 
                            className="mb-3 w-1/2 max-sm:w-full  max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12  max-2xl:w-10/12"/>
                            <label htmlFor="rangeHeight" 
                            className="w-1/2 max-sm:w-full max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12">Height: </label>
                            <input type="range" name="Height" min="50" max="300" onChange={changeHeight}  id="rangeHeight" 
                            className="mb-3 w-1/2 max-sm:w-full max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12"/>
                            <label htmlFor="inputColor" 
                            className="w-1/2 max-sm:w-full max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12">Text Color: </label>
                            <input type="text" name="Color" id="inputColor" onChange={changeColor} placeholder="ex: #fff"
                            className="mb-3 w-1/2 max-sm:w-full p-2 border-2 border-blue-700 focus:outline-none  max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12"/>
                            <label htmlFor="inputColor" 
                            className="w-1/2 max-sm:w-full max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12">BackGround Color: </label>
                            <input type="text" name="Color" id="inputColor" onChange={changeBg} placeholder="ex: #fff"
                            className="mb-3 w-1/2 max-sm:w-full p-2 border-2 border-blue-700 focus:outline-none  max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12"/>
                    </div>
                </div>
                <div className="rightMain w-1/2 flex items-center justify-center max-sm:h-1/2 max-sm:w-full">
                    <Btn width={width} height={height} color={color} backGround={BG}>BUTTON</Btn>
                </div>
            </main>
    )
}
export default ButtonComponent