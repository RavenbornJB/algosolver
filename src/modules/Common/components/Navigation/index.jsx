import {Link, NavLink } from 'react-router-dom';
import {useDispatch} from "react-redux";

import {MAIN_TITLE} from "../../../constants";
import {logout} from "../../../stores/LoginStore";


const Navigation = () => {
    const elements = [
        {
            href: "/Profile",
            title: "Profile"
        },
        {
            href: "/problemlist",
            title: "Problems"
        },
        {
            href: "/create",
            title: "Create"
        }
    ];

    const dispatch = useDispatch();



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/problemlist">{MAIN_TITLE}</Link>
            <div className="nav nav-pills">
                {
                    elements.map((elem) => {
                        return <NavLink className="nav-item nav-link" key={elem.href} to={elem.href}>{elem.title}</NavLink>;
                    })
                }
            </div>
            <a className="nav-item nav-link" href="/login" onClick={() => dispatch(logout())}>Log Out</a>
        </nav>
    );

}


export default Navigation;
