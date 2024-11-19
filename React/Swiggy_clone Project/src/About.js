import React, { useEffect, useState } from "react";

export const AboutL = () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Define an async function to fetch data
        const fetchUserData = async () => {
            try {
                const resp = await fetch("https://api.github.com/users/gskarthik98");
                const data = await resp.json();
                setUserData(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setLoading(false); // Ensure loading is set to false in case of an error
            }
        };

        fetchUserData(); // Call the async function
    }, []); // Empty dependency array to run the effect once when the component mounts

    if (loading) return <h1>Loading...</h1>;

    return (
        <div>
            <h2>{userData.login}</h2>
            <p>{userData.bio}</p>
            <img
                src={userData.avatar_url}
                alt={`${userData.login}'s avatar`}
                width="100"
            />
        </div>
    );
};
