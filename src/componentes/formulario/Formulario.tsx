import { useRef, useState } from "react";
import { useAddParticipante } from "../../state/hooks/useAddParticipante";
import { useMsgErro } from "../../state/hooks/useMsgErro";
import './formulario.css'

const Formulario = () => {
    const [nome, setNome] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const adicionar = useAddParticipante();

    const msgError = useMsgErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionar(nome)
        setNome('')
        inputRef.current?.focus()

    }

    return (
        <form onSubmit={adicionarParticipante}>
            <input
                ref={inputRef}
                type='text'
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="insira os nomes dos participantes"
                // autoFocus 
                />
            <button disabled={!nome}>Adicionar</button>
            {msgError && <p role="alert">{msgError}</p> }
        </form>
    )

}


export default Formulario;