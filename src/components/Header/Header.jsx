import { useContext, useEffect } from "react";
import { UserContext } from "../../context/User";
import style from "./Header.module.scss"
import imageDesign from "../../assets/imageDesign.svg"

export default function Header({text}) {

    const {nameUser,setNameUser} = useContext(UserContext)

    useEffect(()=>{
        setNameUser(nameUser)
    },[])
    
    return (
        <div className={style.homeHeader}>
            <h1 className={style.title}>{text}</h1>
            <div className={style.imageDesign}>
                <img className={style.imageDesign} src={imageDesign} />
            </div>
            <div className={style.nameUser}><h3>{nameUser.split(" ")[0].charAt().concat(nameUser.split(" ")[1].charAt())}</h3></div>

        </div>
    )
}