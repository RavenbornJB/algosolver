import React from 'react';
import {MAIN_TITLE} from "../../../constants";
import MainHeading from "../MainHeading";
import HeadingQuote from "../HeadingQuote";


class LoginHeader extends React.Component {
    render() {
        return <header>
                    <MainHeading/>
                    <HeadingQuote/>
                </header>;
    }
}


export default LoginHeader;
