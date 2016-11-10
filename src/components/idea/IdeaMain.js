import React, {PropType}  from 'react';
import IdeaList from './IdeaList';
import {connect} from 'react-redux';
import Highlight from 'react-highlighter';

class IdeaMain extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { ideas } = this.props;

        return (
            <div>
                <IdeaList ideas={ideas} />
            </div>
        );

        
    }
}

function mapStateToProps(state, ownProps) {
    return { ideas: state.ideas };
}

// mapDispatchToProps

export default connect(mapStateToProps)(IdeaMain);