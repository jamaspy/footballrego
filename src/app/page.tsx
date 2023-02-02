"use client";
import {gql, useQuery} from "@apollo/client";
import {Inter} from "@next/font/google";
import {User} from "@prisma/client";
import {UserCard} from "../../components";
import {allUsersQuery} from '../graphql/strings'


const inter = Inter({subsets: ["latin"]});


export default function Home() {
    const {data, loading, error} = useQuery(allUsersQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <main className="grid grid-cols-4 gap-4 p-8">
            {data.users.map((user: User) => (
                <UserCard key={user.email} user={user}/>
            ))}
        </main>
    );
}
