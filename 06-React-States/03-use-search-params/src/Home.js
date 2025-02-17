import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const theme = searchParams.get("theme") || "light";

    useEffect(() => {
        document.body.style.backgroundColor = theme === "dark" ? "#000" : "#fff";
        document.body.style.color = theme === "dark" ? "#fff" : "#000";
    }, [theme]);
    const toggleTheme = () => {
        setSearchParams({ theme: theme === "dark" ? "light" : "dark" });
    };

    return (
        <div>
            <h2>useSearchParams</h2>
            <p>Current Theme: <strong>{theme}</strong></p>
            <button onClick={toggleTheme}>
                Switch to {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
        </div>
    );
}

export default Home;
