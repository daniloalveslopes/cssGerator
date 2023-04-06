import { Fragment } from "react"
import { Header } from "../components/Header"
import "../styles/home.css"
export const Home = () => {
    return (
        <Fragment>
            <Header />
            <main className="main flex max-sm:flex-col">
                <div className="h-full leftMain w-1/2 flex items-center border-r-2 border-blue-700 max-sm:border-r-0 max-sm:w-full max-sm:h-1/2 max-sm:border-b-2">
                    <div className="changes flex flex-col p-5 w-full items-center">
                            <label htmlFor="rangeWidth" 
                            className="w-1/2 max-sm:w-full max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12  max-2xl:w-10/12">Width: </label>
                            <input type="range" name="Width" id="rangeWidth" 
                            className="mb-3 w-1/2 max-sm:w-full  max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12  max-2xl:w-10/12"/>
                            <label htmlFor="rangeHeight" 
                            className="w-1/2 max-sm:w-full max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12">Height: </label>
                            <input type="range" name="Height" id="rangeHeight" 
                            className="mb-3 w-1/2 max-sm:w-full max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12"/>
                            <label htmlFor="inputColor" 
                            className="w-1/2 max-sm:w-full max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12">Color: </label>
                            <input type="text" name="Color" id="inputColor" placeholder="ex: #fff"
                            className="mb-3 w-1/2 max-sm:w-full p-2 border-2 border-blue-700 focus:outline-none  max-md:w-5/6 max-lg:w-10/12 max-xl:w-10/12 max-2xl:w-10/12"/>
                    </div>
                </div>
                <div className="rightMain w-1/2 flex items-center justify-center max-sm:h-1/2 max-sm:w-full">
                    <button>BUTTON</button>
                </div>
            </main>
        </Fragment>
    )
}