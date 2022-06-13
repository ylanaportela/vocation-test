import React from "react";
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header";
import { Button } from "react-bootstrap";
import style from "./Home.module.scss"
import Image from "../../assets/home-adventure.svg"


export default function Home() {

    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/quiz');
    }


    return (
        <section className={style.home}>

            <Header text={'Let\'s Play'} />

            <div className={style.box}>
                <h2>Olá, seja bem vinda!</h2>

                <div className={style.paragraphs}>
                    <div className={style.text}>
                        <p>Se você tivesse a oportunidade de mergulhar na aréa da tecnologia, conhecer programação e fazer sistemas, você saberia por onde começar?</p>

                        <p>Não? Então você está no lugar certo, esse quiz foi desenvolvido para descubrir sua preferência no desenvolvimento de software.</p>
                    </div>


                    <img className={style.imageAdventure} src={Image} />

                </div>

                <Button size="lg" onClick={routeChange}>Vamos começar?</Button>


            </div>

        </section>
    )
}