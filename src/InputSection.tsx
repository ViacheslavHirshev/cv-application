import { useState } from "react";
import Input from "./Input";
import { InputField } from "./types";

interface InputSectionProps
{
    title: string;
    sectionId: number;
    inputs: InputField[];
    onInputChange: (sectionId: number, inputFieldId: number, newValue: string) => void;
}

function InputSection({ title, sectionId, inputs, onInputChange }: InputSectionProps)
{
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="input-section">
            <h2>{title} <img onClick={() => setIsOpened(!isOpened)} src="./top-arrow.svg" className={`open-icon ${isOpened ? "open-icon-opened" : "open-icon-closed"}`}></img></h2>
            {
                isOpened ? inputs.map(input =>
                    <Input key={`${sectionId}-${input.id}`}
                        labelValue={input.label}
                        inputType={input.inputType}
                        inputValue={input.value}
                        inputId={input.id}
                        sectionId={sectionId}
                        onInputChange={onInputChange}
                    />)
                    : null
            }
        </div>
    )
}

export default InputSection;