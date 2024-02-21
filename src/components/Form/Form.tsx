import "./Form.css";
import { useState } from "react";

interface FormProps {

}

export const Form = () => {
    // const [ state, setState ] = useState();
    // const [ variável, funçãoQueAtualizaVariável ] = useState();
    const [ name, setName ] = useState<string>();
    const [ email, setEmail ] = useState<string>();
    const [ password, setPassword ] = useState<string>();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmitClick = () => {
        const data = {
            name,
            email,
            password
        };
        console.log(data);
    }

    return (
        <form>
            <label htmlFor="name">Nome</label>
            <input
                onChange={handleNameChange}
                id="name"
                name="name"
                value={name}
            />
            <label htmlFor="email">E-mail</label>
            <input
                onChange={handleEmailChange}
                type="email"
                id="email"
                name="email"
                value={email}
            />
            <label htmlFor="password">Senha</label>
            <input
                onChange={handlePasswordChange}
                type="password"
                id="password"
                name="password"
                value={password}
            />
            <button
                onClick={handleSubmitClick}
                type="button"
            >Ver Valores</button>
        </form>
    );
}