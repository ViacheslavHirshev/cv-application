interface EducationInfoProps
{
    startDate: string;
    endDate: string;
    location: string;
    degree: string;
    school: string;
}

function EducationInfo({ startDate, endDate, location, degree, school }: EducationInfoProps)
{
    return (
        <div className="education-info">
            <h2>Education</h2>
            <div>
                <div>
                    {
                        (startDate && endDate) ?
                            <p>{startDate} - {endDate}</p>
                            : null
                    }
                    <p>{location}</p>
                </div>
                <div>
                    <p className="education-school">{school}</p>
                    <p className="education-degree">{degree}</p>
                </div>
            </div>
        </div >
    )
}

export default EducationInfo;