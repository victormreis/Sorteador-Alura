import { act, fireEvent, render, screen } from "@testing-library/react";
import exp from "constants";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

describe('comportamento do forumalrio.tsx', () => {

    test('Quando input estiver vazio, novos participantes não podem ser adicionados', () => {

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

        //Encontrar o botão
        const botao = screen.getByRole('button')
        //garantir que o input esteja presente no documento
        expect(input).toBeInTheDocument();
        //garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled();

    })

    test('Adicionar um participante caso exista um nome preenchido', () => {

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

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

    test('Nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Victor Reis'
            }
        })
        //clicar no botao de gravar 
        fireEvent.click(botao)

        fireEvent.change(input, {
            target: {
                value: 'Victor Reis'
            }
        })
        //clicar no botao de gravar 
        fireEvent.click(botao)

        const msgError = screen.getByRole('alert')

        expect(msgError.textContent).toBe('Nomes duplicados não são permitidos!')


    })

    test('Mensagem de erro deve sumir após n segundos', () => {
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>)

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'Victor Reis'
            }
        })
        //clicar no botao de gravar 
        fireEvent.click(botao)

        fireEvent.change(input, {
            target: {
                value: 'Victor Reis'
            }
        })
        //clicar no botao de gravar 
        fireEvent.click(botao)

        let msgError = screen.queryByRole('alert')

        expect(msgError).toBeInTheDocument()

        //esperar n segundos

        act(() => {

            jest.runAllTimers()
        });

        msgError = screen.queryByRole('alert')
        expect(msgError).toBeNull()



    })

})

