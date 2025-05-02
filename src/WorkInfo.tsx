interface WorkInfoProps 
{
    startDate: string;
    endDate: string;
    location: string;
    company: string;
    position: string;
}

function WorkInfo({ startDate, endDate, location, company, position }: WorkInfoProps)
{
    return (
        <div className="work-info">
            <h2>Work experience</h2>
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
                    <p className="work-company">{company}</p>
                    <p className="work-position">{position}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkInfo;