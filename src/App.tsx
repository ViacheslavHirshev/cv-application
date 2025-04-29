import { useState } from "react";
import InputSection from "./InputSection";
import { InputField } from "./types";
import DisplaySection from "./DisplaySection";

const personalInfoInitial: InputField[] = [
  { id: 0, label: "Name", value: "" },
  { id: 1, label: "Surname", value: "" },
  { id: 2, label: "Age", value: "" },
  { id: 3, label: "Home address", value: "" },
  { id: 4, label: "Phone number", value: "" },
  { id: 5, label: "Github link", value: "" },
  { id: 6, label: "Linkedin", value: "" },
];

const educationInfoInitial: InputField[] = [
  { id: 0, label: "Start date", value: "" },
  { id: 1, label: "End date", value: "" },
  { id: 2, label: "Location", value: "" },
  { id: 3, label: "Degree", value: "" },
];

const workInfoInitial: InputField[] = [
  { id: 0, label: "Start date", value: "" },
  { id: 1, label: "End date", value: "" },
  { id: 2, label: "Location", value: "" },
  { id: 3, label: "Company", value: "" },
  { id: 4, label: "Position", value: "" },
]

function App()
{
  const [inputs, setInputs] = useState<InputField[][]>([personalInfoInitial, educationInfoInitial, workInfoInitial]);

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
      <DisplaySection inputs={inputs} />
    </div>
  )
}

export default App;