import React from 'react';
import { Markup } from 'interweave';

class FieldProblemDescription extends React.Component{

    render(){
        // When we have a redirect to this component we get the data -- (props)
        // For example from the page of problems list

        return <div>
            <h1 id="brief_desc">{this.props.name}</h1>
            <Markup content={this.props.description}/>
        </div>;
    }
}

export default FieldProblemDescription;
