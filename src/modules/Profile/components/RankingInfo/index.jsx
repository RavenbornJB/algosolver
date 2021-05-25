import React from "react";
import "./styles.scss";

class RankingInfo extends React.Component {
  render() {
    const elements = [
      {
        title: "Problems solved",
        count: 68,
      },
      {
        title: "Rank worldwide",
        count: 1729,
      },
      {
        title: "Rank in country",
        count: 42,
      },
    ];

    return (
      <div className="stats">
        <h3>Stats:</h3>
        <ul>
          {elements.map((elem) => {
            return (
              <li>
                {elem.title}: <b>{elem.count}</b>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default RankingInfo;
