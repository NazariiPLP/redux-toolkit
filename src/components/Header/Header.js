import React from "react";

const Header = () => {
    return (
        <header>
            <h1>My counter</h1>
            <nav>
                <ul>
                    <li>link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                </ul>
            </nav>

            <div>
                <button>Switch Theme</button>
            </div>
        </header>
    )
}

export default Header;