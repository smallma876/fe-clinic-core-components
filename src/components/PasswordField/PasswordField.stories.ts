import { PasswordField } from "./PasswordField";

const meta = {
    title: "PasswordField",
    component: PasswordField,
}

export default meta;

export const Base = {
    args: {
        id: "Password",
        label: "Ingresa password",
    }
}

export const Error = {
    args: {
        id: "Password",
        label: "Ingresa password",
        error: {
            message: "Es un error"
        }
    }
}