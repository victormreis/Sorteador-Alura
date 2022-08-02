import React from "react";
import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não tire o proprio nome', () => {
        
        const participantes = [
            'Victor',
            'Daiane',
            'Michele',
            'Matheus',
            'Gabriel',
            'Juliana'
        ]

        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })

    })
})