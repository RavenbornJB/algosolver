import React from 'react';
import styles from './styles.css';
import { Markup } from 'interweave';

class FieldProblemDescription extends React.Component{

    render(){
        // When we have a redirect to this component we get the data -- (props)
        // For example from the page of problems list

        return <div>
            <p id="brief_desc">{this.props.brief_description}</p>
            <Markup content={this.props.full_description}/>
        </div>;
    }
}

export default FieldProblemDescription;