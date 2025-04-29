interface PersonalInfoProps
{
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    github: string;
    linkedin: string;
}

function PersonalInfo({ name, surname, email, phone, address, github, linkedin }: PersonalInfoProps)
{
    return (
        <div>
            <h2>Personal info</h2>
            <div>
                <p>{name} {surname}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
                <p>{github}</p>
                <p>{linkedin}</p>
            </div>
        </div>
    )
}

export default PersonalInfo;