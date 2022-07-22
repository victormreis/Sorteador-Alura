import { fireEvent, render, screen } from "@testing-library/react";
import exp from "constants";
import React from "react";
import Formulario from "./Formulario";

test('Quando input estiver vazio, novos participantes não podem ser adicionados', () => {

    render(<Formulario />)
    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('insira os nomes dos participantes')

    //Encontrar o botão
    const botao = screen.getByRole('button')
    //garantir que o input esteja presente no documento
    expect(input).toBeInTheDocument();
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled();

})

test('Adicionar um participante caso exista um nome preenchido', () => {

    render(<Formulario />)

    const input = screen.getByPlaceholderText('insira os nomes dos participantes')

    const botao = screen.getByRole('button')

    //inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: 'Victor Reis'
        }
    })
    //clicar no botao de gravar 
    fireEvent.click(botao)

    //garantir que o input esteja com foco ativo(auto focus)
    expect(input).toHaveFocus()
    //garantir que o input nao tenha valor
    expect(input).toHaveValue('')
})