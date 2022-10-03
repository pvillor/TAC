import { Contain, Container, ContainerReceive, Inputs, Receive, Simulation, WillReceive } from "./styles"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useState } from "react"

const Home = () => {

    const [ receipts, setReceipts ] = useState({
        1: 0.00,
        15: 0.00,
        30: 0.00,
        90: 0.00
    })
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {

        axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', data)
            .then((response) => setReceipts(response.data))
            .catch((err) => console.log(err))
    }

    const cents = (value) => {
        const str = value.toString()
        const separateValue = str.split('')
        separateValue.splice(-2, 0, ',')

        if(separateValue.length < 4){
            separateValue.unshift('0')
            const finalValue = separateValue.join('')

            return finalValue+0
        }

        return separateValue.join('')
    }

    return (
        <Container>
            <Contain>
                <Simulation>
                    <h1>Simule sua antecipação</h1>
                    <Inputs onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <h4>Informe o valor da venda *</h4>
                            <input
                            type="text"
                            {...register('amount')}
                            />
                        </div>
                        <div>
                            <h4>Em quantas parcelas *</h4>
                            <input
                            type="text"
                            {...register('installments')}
                            />
                            <p>Máximo de 12 parcelas</p>
                        </div>
                        <div>
                            <h4>Informe o percentual de MDR *</h4>
                            <input
                            type="text"
                            {...register('mdr')}
                            />
                        </div>
                        <button type="submit">Simular</button>
                    </Inputs>
                </Simulation>
                <Receive>
                    <ContainerReceive>
                        <div>
                            <h2>VOCÊ RECEBERÁ:</h2>
                            <hr />
                        </div>
                        <WillReceive>
                            <p>Amanhã:</p>
                            <h3>R$ {cents(receipts[1])}</h3>
                        </WillReceive>
                        <WillReceive>
                            <p>Em 15 dias:</p>
                            <h3>R$ {cents(receipts[15])}</h3>
                        </WillReceive>
                        <WillReceive>
                            <p>Em 30 dias:</p>
                            <h3>R$ {cents(receipts[30])}</h3>
                        </WillReceive>
                        <WillReceive>
                            <p>Em 90 dias:</p>
                            <h3>R$ {cents(receipts[90])}</h3>
                        </WillReceive>
                    </ContainerReceive>
                </Receive>
            </Contain>
        </Container>
    )
}

export default Home