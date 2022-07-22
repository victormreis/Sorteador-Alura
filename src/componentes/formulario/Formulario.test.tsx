import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

test('Quando input estiver vazio, novos participantes não podem ser adicionados',() => {

    render(<Formulario />)

    const input = screen.getByPlaceholderText('insira os nomes dos participantes')


    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument();

    expect(botao).toBeDisabled();

})