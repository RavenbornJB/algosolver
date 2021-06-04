
import {useSelector} from "react-redux";

import {selectUser} from "../../../redux/AuthReducer";
import {Redirect, Route} from "react-router-dom";


const SafeRoute = (props) => {

    const user = useSelector(selectUser);


    return (
        user !== null? <Route {...props} />: <Redirect to="/login"/>
    );

}


export default SafeRoute;
