import { useState } from "react";

export default function SignUpForm({ token, setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: { username },
                        password: { password },
                    }),
                }
            );

            const result = await response.json();
            setToken(result.token);
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:{" "}
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        minLength="8"
                        required
                    />
                </label>
                <label>
                    Password:{" "}
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        minLength="8"
                        required
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}
