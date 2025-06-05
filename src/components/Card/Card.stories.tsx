import Card from "./Card";
import { CardTypes } from "./CardTypes.enum";

const meta = {
    title: "Card",
    component: Card,
}

export default meta;

export const Primary = {
    args: {
        type: CardTypes.Primary,
        children: <div>Hola Mundo</div>
    }
}

export const Secondary = {
    args: {
        type: CardTypes.Secondary,
        children: <div>Hola Mundo 2</div>
    }
}