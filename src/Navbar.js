import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/" className="active">Personal Info</Link>
                <Link to="/billing">Billing Info</Link>
                <Link to="/confirm">Confirm Payment</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;