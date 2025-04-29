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
        <div>
            <h2>Work experience</h2>
            <div>
                <p>{startDate} - {endDate}</p>
                <p>{location}</p>
                <p>{company}</p>
                <p>{position}</p>
            </div>
        </div>
    )
}

export default WorkInfo;