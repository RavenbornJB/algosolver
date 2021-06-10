import React from "react";
import {useSelector} from "react-redux";
import './styles.scss';

import {selectUser} from "../../../redux/AuthReducer";
import Emoji from "react-emoji-render";
import flags from "../../../constants/flags";

const AdditionalData = () =>  {
    const user = useSelector(selectUser);

    return (
      <div className="additionalData">
        <p>
            <br/>
            Country: <Emoji text={user.country in flags? user.country + flags[user.country]:  user.country}/>
            <br/>
            Born: {user.birthdate}
            <br/>
            Email: {user.email}
        </p>
      </div>
    );
}

export default AdditionalData;
