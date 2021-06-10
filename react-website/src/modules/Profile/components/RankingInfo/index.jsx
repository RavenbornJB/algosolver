import React from "react";
import {selectUser} from "../../../redux/AuthReducer";
import "./styles.scss";

import {useSelector} from "react-redux";

const RankingInfo = () => {

    const user = useSelector(selectUser);

    return (
      <div className="stats">
        <h3>Stats:</h3>
        <ul>
          <li>Problems solved: <b>0</b></li>
          <li>Problems created: <b>0</b></li>
          <li>Rank: <b>1024</b></li>
        </ul>
      </div>
    );
}

export default RankingInfo;
