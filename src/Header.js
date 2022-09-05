import { Link } from "react-router-dom";
import "./App.css";

const Header = () => {
    return (
        <header className="App-header">
            <div className="header"></div>
            <img
                src="/IMG_0807.jpg"
                className="logo"
                alt="width: 100%; height 276px"
            />

            <div className="container-fluid">
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/addbusiness">Add Your Business</Link>
                    <Link to="/businesspage">Black Business Directoy</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
