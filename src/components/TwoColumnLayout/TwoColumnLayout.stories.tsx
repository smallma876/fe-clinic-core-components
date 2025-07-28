import type { Meta } from "@storybook/react-vite";
import { TwoColumnLayout } from "./TwoColumnLayout";
import { Card } from "../Card";
import { Selector } from "../Selector";
import { TextField } from "../TextField";
import { PasswordField } from "../PasswordField";
import { Checkbox } from "../Checkbox";
import { ButtonPrimary } from "../ButtonPrimary";
import { ButtonLink } from "../ButtonLink";

const meta = {
    title: "TwoColumnLayout",
    component: TwoColumnLayout
} satisfies Meta<typeof TwoColumnLayout>

export default meta;

export const Base = {
    args: {
        children: <Card>
            <h1>Login</h1>
            <p>Ingresa tus datos para ingresar</p>
            <Selector
                id='documentType'
                label='Tipo de documento'
            >
                <option value="dni">DNI</option>
                <option value="passport">PASAPORTE</option>
            </Selector>
            <TextField
                label='Documento'
                id="document"
                placeholder="document"

            />
            <PasswordField
                label='Contraseña'
                placeholder="password"
                id="password"

            />
            <Checkbox
                id="remember"
                label='Recordar usuario'
                value="remember"
            />
            <ButtonPrimary isLoading={false} >
                Ingresar
            </ButtonPrimary>
            <ButtonLink>Registrar</ButtonLink>
        </Card>,
        rightContent: <p>Hola Mundo Derecho</p>,
    }
}