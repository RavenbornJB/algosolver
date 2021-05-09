import React from "react";

class RankingInfo extends React.Component {
  render() {
    return (
      <div className="rankings">
        <h3> {this.props.username}'s stats: </h3>
        <ul>
          <li>Problems solved: <b>68</b></li>
          <li>Rank worldwide: <b>1729</b></li>
          <li>Rank in country: <b>42</b></li>
        </ul>
      </div>
    );
  }
}

export default RankingInfo;
