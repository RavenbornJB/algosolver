import React from "react";
import {useSelector} from "react-redux";
import Emoji from "react-emoji-render";
import './styles.scss';

import {selectUser} from "../../../stores/LoginStore";

const AdditionalData = () =>  {
    const user = useSelector(selectUser);

    return (
      <div className="additionalData">
        <p>
          <br />
          Country: {user.country}
          <Emoji text="🇺🇦" />
          <br />
          Born: {user.birthdate}
          <br />
          Email: {user.email}
        </p>
      </div>
    );
}

export default AdditionalData;
