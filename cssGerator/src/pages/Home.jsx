import { Fragment } from "react"
import { Header } from "../components/Header"
import "../styles/home.css"
import ButtonComponent from "../components/ButtonComponent.jsx"
import HomeComponent from "../components/HomeComponent"
import {Route, Routes} from "react-router-dom"
export const Home = () => {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/button" element={<ButtonComponent />} />
            </Routes>
                
        </Fragment>
    )
}