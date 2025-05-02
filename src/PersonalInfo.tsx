interface PersonalInfoProps
{
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
}

function PersonalInfo({ name, surname, email, phone, address }: PersonalInfoProps)
{
    return (
        (name || surname) ?
            <div className="personal-info">
                <h2>{name} {surname}</h2>
                <div>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{address}</p>
                </div>
            </div>
            : null
    )
}

export default PersonalInfo;