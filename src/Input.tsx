interface InputProps
{
    labelValue: string;
    inputType: "text" | "date" | "email";
    inputValue: string;
    inputId: number;
    sectionId: number;
    onInputChange: (sectionId: number, inputFieldId: number, newValue: string) => void;
}

function Input({ labelValue, inputType, inputValue, inputId, sectionId, onInputChange }: InputProps)
{
    function renderByType()
    {
        // console.log("InputType: ", inputType);
        switch (inputType)
        {
            case "text":
                return <input type="text" value={inputValue} onChange={e => onInputChange(sectionId, inputId, e.target.value)} />;
            case "date":
                return <input type="date" value={inputValue} onChange={e => onInputChange(sectionId, inputId, e.target.value)} />;
            case "email":
                return <input type="email" value={inputValue} onChange={e => onInputChange(sectionId, inputId, e.target.value)} />;
            default:
                return null;
        }
    }

    return <div className="input-field">
        <label>{labelValue}</label>
        {renderByType()}
    </div>
}

export default Input;