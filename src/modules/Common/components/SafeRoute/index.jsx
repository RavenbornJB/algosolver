
import {useSelector} from "react-redux";

import {selectUser} from "../../../stores/LoginStore";
import {Redirect, Route, useHistory} from "react-router-dom";


const SafeRoute = (props) => {

    const user = useSelector(selectUser);


    return (
        user !== null? <Route {...props} />: <Redirect to="/login"/>
    );

}


export default SafeRoute;
