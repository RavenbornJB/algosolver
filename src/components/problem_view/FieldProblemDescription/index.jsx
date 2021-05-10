import React from 'react';
import styles from './styles.scss';
import { Markup } from 'interweave';

class FieldProblemDescription extends React.Component{

    render(){
        // When we have a redirect to this component we get the data -- (props)
        // For example from the page of problems list

        return <div>
            <h1 id="brief_desc">{this.props.brief_description}</h1>
            <Markup content={this.props.full_description}/>
        </div>;
    }
}

export default FieldProblemDescription;
