import { Link } from "gatsby";
import React from "react";

function Head() {
    return (
        <header style={{ display: "flex", gap: 10 }}>
            <Link to="/" style={{ padding: 10 }}>로고</Link>
            <div style={{ flexGrow: 1 }}></div>
            <Link to="/about" style={{ padding: 10 }}>about</Link>
            <Link to="/test" style={{ padding: 10 }}>test</Link>
            <Link to="/test-space" style={{ padding: 10 }}>test-space</Link>
        </header>
    );
}

export default Head;