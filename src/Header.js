import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="App-header">
            <div className="header">
                <img src="/IMG_0805.jpg" alt="" />
            </div>

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
