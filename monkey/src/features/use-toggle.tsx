import {useCallback, useState} from "react";

function useToggle(initialValue: boolean): [boolean, () => void] {
    const [boolVal, setBoolVal] = useState<boolean>(initialValue);

    // We don't want to redefine the function every render, because the toggle remains the same.
    const toggle = useCallback(() => {
        setBoolVal(prev => !prev);
    }, []);

    return [boolVal, toggle];
}

export default useToggle;