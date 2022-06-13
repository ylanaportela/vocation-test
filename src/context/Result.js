import React, { createContext, useState } from "react"

export const ResultContext = createContext() 
 
export default function ResultProvider({ children }){
    const [scoreResultFront, setScoreResultFront] = useState(0)
    const [scoreResultBack, setScoreResultBack] = useState(0)
    
    return(
        <ResultContext.Provider value={{
            scoreResultFront, 
            setScoreResultFront,
            scoreResultBack,
            setScoreResultBack
        }}>
            { children }
        </ResultContext.Provider>
    )
}