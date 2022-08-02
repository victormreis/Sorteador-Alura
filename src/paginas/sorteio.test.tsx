import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import Sorteio from "./Sorteio ";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('Na página de sorteio', () => {

    const participantes = [
        'Victor', 
        'Daiane', 
        'Michele'
    ]

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)

        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length)
    })
})