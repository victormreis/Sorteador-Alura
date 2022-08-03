import { useRef, useState } from "react";
import { useAddParticipante } from "../../state/hooks/useAddParticipante";
import { useMsgErro } from "../../state/hooks/useMsgErro";
import './formulario.css'

const Formulario = () => {
    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAddParticipante ()

    const mensagemDeErro = useMsgErro ()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (<form onSubmit={adicionarParticipante}>
        <div className="grupo-input-btn">
            <input
                ref={inputRef}
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes"
            />
            <button disabled={!nome}>Adicionar</button>
        </div>
        {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
    </form>)
}


export default Formulario;