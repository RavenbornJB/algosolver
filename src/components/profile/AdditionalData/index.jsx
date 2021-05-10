import React from "react";
import Emoji from "react-emoji-render";
import './styles.scss';

class AdditionalData extends React.Component {
  render() {
    return (
      <div className="additionalData">
        <p>
          <br />
          Country: Ukraine
          <Emoji text="🇺🇦" />
          <br />
          Born: 06.02.2003
          <br />
          Email: mr_kappa69@gmail.com
        </p>
      </div>
    );
  }
}

export default AdditionalData;
