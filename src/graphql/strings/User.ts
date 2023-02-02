import {gql} from "@apollo/client";

export const allUsersQuery = gql`
    query {
        users {
            firstName
            lastName
            dateOfBirth
            phone
            email
            address
            preferredPosition
            emergencyContactName
            emergencyContactPhone
            emergencyContactRelationship
            image
            role
        }
    }
`;