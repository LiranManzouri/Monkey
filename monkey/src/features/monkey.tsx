import React, {FC} from "react";
import useToggle from "./use-toggle";

const Monkey: FC = () => {
    const [boolVal, toggle] = useToggle(false);

    function onButtonClick() {
        toggle();
    }

    return (
        <div>
            <button onClick={onButtonClick}>Click me!</button>
            <div>
                {boolVal ? 'באימון!' : 'רואה סדרות...'}
            </div>
        </div>
    )
}

export default Monkey;