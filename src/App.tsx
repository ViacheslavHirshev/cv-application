import { useState } from "react";
import InputSection from "./InputSection";
import { InputField } from "./types";

const section1Inputs: InputField[] = [
  { id: 1, label: "Name", value: "" },
  { id: 2, label: "Surname", value: "" },
  { id: 3, label: "Age", value: "" },
];

const section2Inputs: InputField[] = [
  { id: 1, label: "Country", value: "" },
  { id: 2, label: "City", value: "" },
  { id: 3, label: "Home address", value: "" },
];

const section3Inputs: InputField[] = [
  { id: 1, label: "Phone number", value: "" },
  { id: 2, label: "Github link", value: "" },
  { id: 3, label: "Linkedin", value: "" },
];

function App()
{
  const [inputs, setInputs] = useState<InputField[][]>([section1Inputs, section2Inputs, section3Inputs]);

  function inputChangeHandler(sectionId: number, inputFieldId: number, newValue: string)
  {
    setInputs(prevValue => prevValue.map((sec, secId) =>
    {
      if (secId === sectionId)
      {
        return sec.map(input => input.id === inputFieldId ? { ...input, value: newValue } : input);
      }
      return sec;
    }));
  }

  return (
    <div>
      <InputSection sectionId={0} inputs={inputs[0]} onInputChange={inputChangeHandler} />
      <InputSection sectionId={1} inputs={inputs[1]} onInputChange={inputChangeHandler} />
      <InputSection sectionId={2} inputs={inputs[2]} onInputChange={inputChangeHandler} />
    </div>
  )
}

export default App;