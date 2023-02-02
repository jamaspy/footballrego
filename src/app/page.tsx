"use client";
import { gql, useQuery } from "@apollo/client";
import { Inter } from "@next/font/google";
import { User } from "@prisma/client";
import Image from "next/image";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });
const allUsersQuery = gql`
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

const Row = ({ item, label }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <p className="font-bold mr-4">{label}:</p>
      <p>{item}</p>
    </div>
  );
};

export default function Home() {
  const { data, loading, error } = useQuery(allUsersQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      {data.users.map((user: User) => (
        <div
          key={user.email}
          className="border rounded-md flex items-center flex-col"
        >
          <div className="rounded-full overflow-hidden w-24 h-24 shadow-md ">
            <img
              src={user.image}
              alt="Picture of the author"
              className="mx-auto"
            />
          </div>
          <div className="flex items-start flex-col">
            {Object.values(user).map((item, index) => {
              if (item) {
                console.log(item);
                return (
                  <Row
                    key={index}
                    item={item}
                    label={Object.keys(user)[index]}
                  />
                );
              }
            })}
          </div>
        </div>
      ))}
    </main>
  );
}
