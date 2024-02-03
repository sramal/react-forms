import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Authenitcate from "./components/Authenitcate";

export default function App() {
    const [token, setToken] = useState(null);

    return (
        <>
            <SignUpForm token={token} setToken={setToken} />
            <Authenitcate token={token} setToken={setToken} />
        </>
    );
}
