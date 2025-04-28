interface InputProps
{
    labelValue: string;
    inputValue: string;
    inputId: number;
    sectionId: number;
    onInputChange: (sectionId: number, inputFieldId: number, newValue: string) => void;
}

function Input({ labelValue, inputValue, inputId, sectionId, onInputChange }: InputProps)
{
    return <div>
        <label>{labelValue}</label>
        <input type="text" value={inputValue} onChange={e => onInputChange(sectionId, inputId, e.target.value)} />
    </div>
}

export default Input;