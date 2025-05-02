import { useState } from "react";
import InputSection from "./InputSection";
import { InputField } from "./types";
import DisplaySection from "./DisplaySection";

const personalInfoInitial: InputField[] = [
  { id: 0, label: "Name", value: "Duke", inputType: "text" },
  { id: 1, label: "Surname", value: "Dracula", inputType: "text" },
  { id: 2, label: "Email", value: "dukedracula@gmail.com", inputType: "email" },
  { id: 3, label: "Home address", value: "Transylvania", inputType: "text" },
  { id: 4, label: "Phone number", value: "123-456-78-90", inputType: "text" },
];

const educationInfoInitial: InputField[] = [
  { id: 0, label: "Start date", value: "", inputType: "date" },
  { id: 1, label: "End date", value: "", inputType: "date" },
  { id: 2, label: "Location", value: "", inputType: "text" },
  { id: 3, label: "Degree", value: "", inputType: "text" },
  { id: 4, label: "School", value: "", inputType: "text" },
];

const workInfoInitial: InputField[] = [
  { id: 0, label: "Start date", value: "", inputType: "date" },
  { id: 1, label: "End date", value: "", inputType: "date" },
  { id: 2, label: "Location", value: "", inputType: "text" },
  { id: 3, label: "Company", value: "", inputType: "text" },
  { id: 4, label: "Position", value: "", inputType: "text" },
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
    <>
      <header>
        <h1>CV builder</h1>
      </header>

      <main>
        <div className="input-sections">
          <InputSection title="Personal info" sectionId={0} inputs={inputs[0]} onInputChange={inputChangeHandler} />
          <InputSection title="Education" sectionId={1} inputs={inputs[1]} onInputChange={inputChangeHandler} />
          <InputSection title="Work experience" sectionId={2} inputs={inputs[2]} onInputChange={inputChangeHandler} />
        </div>
        <DisplaySection inputs={inputs} />
      </main>
    </>
  )
}

export default App;