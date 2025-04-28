import Input from "./Input";
import { InputField } from "./types";

interface InputSectionProps
{
    sectionId: number;
    inputs: InputField[];
    onInputChange: (sectionId: number, inputFieldId: number, newValue: string) => void;
}

function InputSection({ sectionId, inputs, onInputChange }: InputSectionProps)
{
    return (
        <div>
            {inputs.map(input =>
                <Input key={`${sectionId}-${input.id}`}
                    labelValue={input.label}
                    inputValue={input.value}
                    inputId={input.id}
                    sectionId={sectionId}
                    onInputChange={onInputChange}
                />)}
        </div>
    )
}

export default InputSection;