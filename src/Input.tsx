function Input({ labelValue, inputValue, inputId, onInputChange }:
    { labelValue: string, inputValue: string, inputId: number, onInputChange: (id: number, newValue: string) => void })
{
    return <div>
        <label>{labelValue}</label>
        <input type="text" value={inputValue} onChange={e => onInputChange(inputId, e.target.value)} />
    </div>
}

export default Input;