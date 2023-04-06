import { Link } from "react-router-dom"
import "../styles/homeComponent.css"
const HomeComponent = () => {
    
    return(
        <main className="p-5">
            <h1 className="text-2xl font-medium mb-2">OPTIONS:</h1>
            <div className="container">
                <Link to={"/button"} className="card border-2 border-black bg-blue-700 text-white rounded-lg p-3"><h1 className="text-center">BUTTON</h1></Link> 
                 
           
           
           
            </div>

            
             
        </main>
    )
}
export default HomeComponent