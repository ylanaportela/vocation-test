import { useContext } from "react"
import { ResultContext } from "../../context/Result"
import { UserContext } from "../../context/User"
import { CircleProgress } from "react-gradient-progress"
import Header from "../../components/Header/Header"
import style from './Result.module.scss'
import ImageFront from "../../assets/frontend-image.svg"
import ImageBack from "../../assets/backend-image.svg"

export default function Result() {
    const { scoreResultFront } = useContext(ResultContext)
    const { scoreResultBack } = useContext(ResultContext)
    const { imageUser } = useContext(UserContext)


    return (
        <section className={style.result}>

            <Header text={'Resultado'}></Header>


            <div className={style.informations}>

                <div className={style.Image}>

                    <img
                        className="rounded-circle"
                        src={imageUser}
                        alt={imageUser === null ? "" : "Picture of profile"}
                    />
                </div>

                <div className={style.textApresentation}>
                    <h6>Que Incrível! Você tem tudo para ser uma Desenvolvedora {scoreResultFront > scoreResultBack ? "Frontend" : "Backend"}</h6>
                </div>

                <div className={style.score}>

                    <p>Seu Resultado foi esse:</p>

                    <div className={style.box}>

                        <div className={style.graphicResult}>

                            <div>
                                <CircleProgress primaryColor={['#EEF1F3', '#f77476']} data-theme={style.resultCircle} width={100} strokeWidth={5} percentage={scoreResultFront} />
                                <p>Frontend</p>
                            </div>

                            <div>
                                <CircleProgress primaryColor={['#EEF1F3', '#3741f5']} data-theme={style.resultCircle} width={100} strokeWidth={5} percentage={scoreResultBack} />
                                <p>Backend</p>
                            </div>

                        </div>



                        <div className={style.list}> 
                            <p>Quer saber com o que trabalha um desenvolvedor Frontend? Segue alguns links que podem te ajudar na sua jornada, boa sorte!</p>

                            <ul>
                                <li>Roadmap {scoreResultFront > scoreResultBack ? "Frontend" : "Backend"} - <a href={`https://roadmap.sh/${scoreResultFront > scoreResultBack ? "frontend" : "backend"}`} target='blank'>Link</a></li>
                                <li>Dev.To {scoreResultFront > scoreResultBack ? "Frontend" : "Backend"} - <a href={`https://dev.to/t/${scoreResultFront > scoreResultBack ? "frontend" : "backend"}`} target='blank'>Link</a></li>
                            </ul>
                        </div>

                    </div>

                    <div className={style.imageResult}>
                        <img src={scoreResultFront > scoreResultBack ? ImageFront : ImageBack} alt="Illustration of result quiz, frontend or backend" />
                    </div>
                </div>
            </div>


        </section>

    )
}