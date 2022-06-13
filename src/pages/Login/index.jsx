import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/User";
import style from "./Login.module.scss"
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import IconCamera from '../../components/IconCamera'
import ImageLogin from "../../assets/login-image.svg"

export default function Login() {

    const [required, setRequired] = useState(false)
    const { nameUser } = useContext(UserContext)
    const { imageUser } = useContext(UserContext)
    const { disabled, setDisabled } = useContext(UserContext)

    function handleClick() {
        setDisabled(false)
        setRequired(true)

        if (required === true) {
            routeChange()
        }
    }


    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/home');
    }


    return (
        <section className={style.login}>

            <div className={style.title}>
                <h2>Login</h2>
            </div>


            <div className={style.loginBody}>

                <div className={style.imageLogin}>

                    <img src={ImageLogin} alt="For page of login, of welcome" />
                    
                </div>
                


                <div className={style.informations}>


                    <div className={style.profile}>

                        <IconCamera name={imageUser === null ? style.svg : style.svgNone} />

                        <img
                            className="rounded-circle"
                            src={imageUser}

                            alt={imageUser === null ? "" : "Picture of profile"}
                        />
                    </div>

                    <Form className={style.form}>
                        <FormGroup className="mb2">

                            <FormLabel>Nome Completo:</FormLabel>
                            <Form.Control
                                className={style.input}
                                type="text"
                                value={nameUser}
                                disabled={disabled}
                            />
                        </FormGroup>


                        <FormGroup className="mb2">
                            <FormLabel>Data de Nascimento:</FormLabel>
                            <Form.Control
                                className="input-group date"
                                type='date'
                                disabled={disabled}
                                required={required}
                            >
                            </Form.Control>
                        </FormGroup>


                        <FormGroup className="mb2">
                            <FormLabel>Mulher Cis:</FormLabel>
                            <Form.Check
                                inline
                                className={style.input}
                                type="checkbox"
                                disabled={disabled}
                                name="group1"
                            />
                            <FormLabel>Mulher Trans: </FormLabel>
                            <Form.Check
                                inline
                                className={style.input}
                                type="checkbox"
                                disabled={disabled}
                                name="group1"
                            />
                        </FormGroup>


                        <Button
                            variant="primary"
                            size="lg"
                            type="submit"
                            className={style.button}
                            onClick={handleClick}
                            data-name="button"
                        >
                            {required !== true ? 'Entrar' : 'Próximo'}
                        </Button>
                    </Form>
                </div>
            </div>


        </section>

    )
}


