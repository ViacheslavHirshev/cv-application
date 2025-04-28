import { useState } from "react";
import Input from "./Input";
import { InputField } from "./types";

function InputSection({ sectionId, initialInputs }: { sectionId: number, initialInputs: InputField[] })
{
    const [inputs, setInputs] = useState<InputField[]>(initialInputs);

    function inputChangeHandler(id: number, newValue: string)
    {
        setInputs(prevValues => prevValues.map(input => input.id === id ? { ...input, value: newValue } : input));
    }

    return (
        <div>
            {inputs.map(input =>
                <Input key={`${sectionId}-${input.id}`}
                    labelValue={input.label}
                    inputValue={input.value}
                    inputId={input.id}
                    onInputChange={inputChangeHandler}
                />)}
        </div>
    )
}

export default InputSection;