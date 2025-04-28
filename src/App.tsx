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
  return (
    <div>
      <InputSection sectionId={1} initialInputs={section1Inputs} />
      <InputSection sectionId={2} initialInputs={section2Inputs} />
      <InputSection sectionId={3} initialInputs={section3Inputs} />
    </div>
  )
}

export default App;