import React from 'react';
import {User} from "@prisma/client";

interface Props {
    user: User
}


const Row = ({item, label}: { item: string, label: string }) => {
    return (
        <div className="w-full flex flex-col items-start justify-between mb-2">
            <p className="font-bold mr-4">{label}</p>
            <p>{item}</p>
        </div>
    );
};


export const UserCard = ({user}: Props) => {
    return (
        <div
            className="border rounded-md flex items-center flex-col p-4 shadow-md"
        >
            <div className="border rounded-full overflow-hidden w-24 h-24 shadow-md ">
                <img
                    src={user.image}
                    alt="Picture of the author"
                    className="mx-auto"
                />
            </div>
            <p className="mt-2 italic text-x underline">{user.preferredPosition}</p>

            <div className="flex items-start flex-col">

                <Row
                    item={user.firstName}
                    label={"First Name"}
                />
                <Row
                    item={user.lastName}
                    label={"Last Name"}
                />
                <Row
                    item={user.phone}
                    label={"Phone"}
                />
                <Row
                    item={user.email}
                    label={"Email"}
                />
                <Row
                    item={user.address}
                    label={"Address"}
                />

                <Row
                    item={user.emergencyContactName}
                    label={"Emergency Contact"}
                />
                <Row
                    item={user.emergencyContactRelationship}
                    label={"Emergency Relationship"}
                />
                <Row
                    item={user.emergencyContactPhone}
                    label={"Emergency Phone"}
                />
            </div>
        </div>
    );
};