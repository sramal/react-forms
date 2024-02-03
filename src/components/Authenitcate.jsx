import { useState } from "react";

export default function Authenitcate({ token, setToken }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const result = await response.json();
            console.log(result);
            setSuccessMessage(result.message);
            result.success && setUsername(result.data.username.username);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            <h2>Authenitcate</h2>
            {successMessage && <p>{username + " " + successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
        </>
    );
}
