import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"


function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
                <Route path="/resultado" element={<Result/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing