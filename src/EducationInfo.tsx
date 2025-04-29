interface EducationInfoProps
{
    startDate: string;
    endDate: string;
    location: string;
    degree: string;
}

function EducationInfo({ startDate, endDate, location, degree }: EducationInfoProps)
{
    return (
        <div>
            <h2>Education</h2>
            <div>
                <p>{startDate} - {endDate}</p>
                <p>{location}</p>
                <p>{degree}</p>
            </div>
        </div>
    )
}

export default EducationInfo;