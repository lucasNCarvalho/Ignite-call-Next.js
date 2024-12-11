import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { z } from "zod";
import { ConnectBox, ConnectItem } from "./styles";

export default function Register() {
    async function handleRegister(data: any) {

    }

    return (
        <Container>
            <Header>
                <Heading as="strong">
                    Conecte sua agenda!
                </Heading>
                <Text>
                    Conecte o seu calendário para verificar automaticamente as horas
                    ocupadas e os novos eventos à medida em que são agendados.
                </Text>
                <MultiStep size={4} currentStep={2} />
            </Header>

            <ConnectBox>
                <ConnectItem>
                    <Text>Google Calendar</Text>
                    <Button variant="secondary" size="sm">
                        Conectar
                        <ArrowRight />
                    </Button>
                </ConnectItem>
                <Button type="submit" >
                    Próximo passo
                    <ArrowRight />
                </Button>
            </ConnectBox>
        </Container>
    )
}