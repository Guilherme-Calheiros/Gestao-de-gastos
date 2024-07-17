import React, { useState } from "react";
import Logo from "./assets/Logo.svg"
import ImagemGarota from "./assets/ImagemGarota.svg"
import ImagemGaroto from "./assets/ImagemGaroto.svg"
import Input from "./components/input.jsx";

let imagens = [ImagemGarota, ImagemGaroto]
const imageRandom = imagens[Math.floor(Math.random() * imagens.length)]
let passwordError = 'Sua senha deve ter pelo menos 8 caracteres.\nSua senha deve conter pelo menos um dígito numérico.\nSua senha deve conter pelo menos uma letra maiúscula.\nSua senha deve conter pelo menos uma letra minúscula.'

function Register() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfimaSenha] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        if (senha !== confirmaSenha) {
            alert('As senhas não coincidem')
            return
        }

        console.log(nome, email, senha, confirmaSenha)
    }

    return (
        <div className="flex h-full">
            <div className="flex flex-col justify-center items-center h-full w-full bg-gradient-to-b from-white to-primarycolor-100 md:w-1/2 md:bg-none">
                <img src={Logo} alt="Logo FinFácil" className="w-64 mb-8" />
                <form className="flex flex-col gap-y-9 items-center border border-contrastcolor rounded-md p-2 bg-white md:w-96" onSubmit={handleSubmit}>
                    <h1 className="text-3xl font-bold text-secondarycolor font-secondary">Registre-se</h1>
                    <Input type="text" placeholder="Nome" onChange={e => setNome(e.target.value)} required='required'/>
                    <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required='required'/>
                    <Input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} required='required' pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' onInvalid={e => e.target.setCustomValidity(passwordError)}/>
                    <Input type="password" placeholder="Confirme sua senha" onChange={e => setConfimaSenha(e.target.value)} required='required' pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'/>
                    <div className="flex gap-4 md:gap-7">
                        <button type="submit" className="bg-contrastcolor text-white p-3 w-32 rounded-xl">Entrar</button>
                    </div>
                    <a href="*" className="mb-4 text-textcolor font-extralight">Esqueci minha senha</a>
                </form>
            </div>
            <div className="bg-primarycolor-100 w-1/2 h-full hidden items-center justify-center md:flex">
                <img src={imageRandom} alt="Imagem ilustrativa com gráficos" />
            </div>
        </div>
    );
}

export default Register;