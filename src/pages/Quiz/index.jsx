import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ResultContext } from "../../context/Result"
import data from "../../data"
import style from "./Quiz.module.scss"
import { Button, Form, FormGroup, FormLabel, ProgressBar } from "react-bootstrap";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [eventTarget, setEventTarget] = useState('')
    const [checked, setChecked] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [scoreFe, setScoreFe] = useState(0)
    const [scoreBe, setScoreBe] = useState(0)

    //-------------------------------------------------
    const { scoreResultFront, setScoreResultFront } = useContext(ResultContext)
    const { scoreResultBack, setScoreResultBack } = useContext(ResultContext)


    function handleClick() {
        if (currentQuestion + 1 < data.length) {
            setCurrentQuestion(currentQuestion + 1)

        }
        else if (currentQuestion + 1 === data.length) {
            routeChange()
        }

        setEventTarget('')
        setChecked('')
        setDisabled(false)
    }

    useEffect(() => {
        if (eventTarget === 'Sim') {
            setScoreFe(scoreFe + 10)
        }
        else if (eventTarget === 'Não') {
            setScoreBe(scoreBe + 10)
        }
        else if (eventTarget === 'Os dois/Nenhum dos dois' || eventTarget === 'Igualmente importantes' || eventTarget === 'Prefiro igualmente todas') {
            setScoreFe(scoreFe + 0)
            setScoreBe(scoreBe + 0)
        }
    }, [eventTarget, checked])


    useEffect(() => {
        if (scoreFe > 0) {
            const front = (100 / data.length) * scoreFe / 10
            setScoreResultFront(front)
        }
        if (scoreBe > 0) {
            const back = (100 / data.length) * scoreBe / 10
            setScoreResultBack(back)
        }
    }, [scoreFe, scoreBe])


    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/resultado');
    }

    const nowFe = Number(scoreResultFront)
    const nowBe = Number(scoreResultBack)

    return (
        <section className={style.quiz}>

            <div className={style.title}>

                <h3>Quiz</h3>

            </div>

            <div className={style.question}>

                <span>Questão {currentQuestion + 1} /{data.length}</span>
                <h4>{data[currentQuestion].question}</h4>

            </div>

            <div className={style.inputGroup}>
                {
                    data[currentQuestion].answer.map(item => (

                        <FormGroup  
                            key={item}
                            className={style.inputRadio}
                        >

                            <Form.Check 
                                value={item}
                                type="radio"
                                name="contact"
                                id={item}
                                className={style.input}
                                checked={checked === item}
                                disabled={disabled} 
                                onChange={e => {
                                    setEventTarget(e.target.value)
                                    setChecked(e.target.value)
                                    data[currentQuestion].answer === item ? setDisabled(false) : setDisabled(true)
                                
                                }} 
                            />

                            <FormLabel className={style.label}>
                                {item}
                            </FormLabel>

                        </FormGroup>

                    ))
                }
            </div>

            <div className={style.progress}>

                <ProgressBar
                    variant="success"
                    className={style.progressBar}
                    min={0}
                    max={100}
                    now={nowFe}
                    label={`FE ${nowFe}%`}
                />

                <ProgressBar
                    variant="info"
                    className={style.progressBar}
                    min={0}
                    max={100}
                    now={nowBe}
                    label={`BE ${nowBe}%`}
                />

            </div>

            <Button
                size="lg"
                className={style.buttonQuiz}
                type='submit'
                onClick={handleClick}
            >
                    {currentQuestion + 1 === data.length ? 'Resultado' : 'Próximo'}
            </Button>

        </section>
    )
}