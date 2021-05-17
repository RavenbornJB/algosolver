import { useRouteMatch } from 'react-router-dom';
import {MAIN_TITLE} from "../../../constants";


const Navigation = () => {
    const elements = [
        {
            href: "/profile",
            title: "Profile"
        },
        {
            href: "/problemlist",
            title: "Problems"
        },
        {
            href: "/create",
            title: "Create"
        },
        {
            href: "/login",
            title: "Log Out"
        }
    ];



    const {url} = useRouteMatch();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">{MAIN_TITLE}</a>
            <div className="nav nav-pills">
                {
                    elements.map((elem) => {
                        let name = "nav-item nav-link";
                        if (elem.href === url) {
                            name += " active";
                        }
                        return <a className={name} key={elem.href} href={elem.href}>{elem.title}</a>;
                    })
                }
            </div>
        </nav>
    );

}


export default Navigation;
