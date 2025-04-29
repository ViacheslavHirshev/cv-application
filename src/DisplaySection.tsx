import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
import { InputField } from "./types";
import WorkInfo from "./WorkInfo";

function DisplaySection({ inputs }: { inputs: InputField[][] })
{
    return (
        <div>
            <PersonalInfo
                name={inputs[0][0].value}
                surname={inputs[0][1].value}
                email={inputs[0][2].value}
                phone={inputs[0][3].value}
                address={inputs[0][4].value}
                github={inputs[0][5].value}
                linkedin={inputs[0][6].value}
            />
            <EducationInfo
                startDate={inputs[1][0].value}
                endDate={inputs[1][1].value}
                location={inputs[1][2].value}
                degree={inputs[1][3].value}
            />

            <WorkInfo
                startDate={inputs[2][0].value}
                endDate={inputs[2][1].value}
                location={inputs[2][2].value}
                company={inputs[2][3].value}
                position={inputs[2][4].value}
            />
        </div>
    )
}

export default DisplaySection;