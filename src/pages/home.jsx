import { Contain, Container, Inputs, Receive, Simulation, WillReceive } from "./styles"

const Home = () => {
    return (
        <Container>
            <Contain>
                <Simulation>
                    <h1>Simule sua antecipação</h1>
                    <Inputs>
                        <div>
                            <h4>Informe o valor da venda *</h4>
                            <input type="text" />
                        </div>
                        <div>
                            <h4>Em quantas parcelas *</h4>
                            <input type="text" />
                            <p>Máximo de 12 parcelas</p>
                        </div>
                        <div>
                            <h4>Informe o percentual de MDR *</h4>
                            <input type="text" />
                        </div>
                    </Inputs>
                </Simulation>
                <Receive>
                    <div>
                        <div>
                            <h2>VOCÊ RECEBERÁ:</h2>
                            <hr />
                        </div>
                        <WillReceive>
                            <p>Amanhã:</p>
                            <h3>R$ 0,00</h3>
                        </WillReceive>
                        <WillReceive>
                            <p>Em 15 dias:</p>
                            <h3>R$ 0,00</h3>
                        </WillReceive>
                        <WillReceive>
                            <p>Em 30 dias:</p>
                            <h3>R$ 0,00</h3>
                        </WillReceive>
                        <WillReceive>
                            <p>Em 90 dias:</p>
                            <h3>R$ 0,00</h3>
                        </WillReceive>
                    </div>
                </Receive>
            </Contain>
        </Container>
    )
}

export default Home