import { useState } from "react"

const useInputstate = (defaultValue='null') => {
    const [value, setValue] = useState(defaultValue);

     const handleChange = e => {
        setValue(e.target.value)
     }

     return [value, handleChange];

}

export default useInputstate;
