import { render, screen } from "@testing-library/react"
import Login from './index.jsx';
import UserProvider from "../../context/User";
import ResultProvider from "../../context/Result";


describe('', ()=>{
    it('exibir título',()=>{
        render(
            <UserProvider>
                <ResultProvider>
                    <Login />
                </ResultProvider>
            </UserProvider>
        )

        expect(screen.getByText('Login')).toBeInTheDocument()
    })
})