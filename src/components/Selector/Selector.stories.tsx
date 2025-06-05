import Selector from "./Selector";

const meta = {
    title: "Selector",
    component: Selector,
}

export default meta;

export const Base = {
    args: {
        children: <>
          <option value="first">first</option>
          <option value="second">second</option>
        </>
    } 
}