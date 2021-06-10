import React from 'react';
import "./styles.scss";


class HeadingQuote extends React.Component {
    render() {
        return (
            <div className="heading-quote">
                <blockquote className="blockquote text-center">
                    <p className="mb-0">A problem well stated is a problem half solved.
                        </p>
                    <p className="blockquote-footer">John Dewey </p>
                </blockquote>
            </div>
        );
    }
}


export default HeadingQuote;
