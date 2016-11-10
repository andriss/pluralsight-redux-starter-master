import React, {PropType}  from 'react';
import {connect} from 'react-redux';

class SearchMain extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        const { search } = this.props;

        return (            
            <input
                type="text"
                className="from-control"
                style={{width: 300, marginLeft: 0, marginRight: 0}}
                value={search}
                onChange={(search) => this.setState({search})}
                onKeyUp={(e) => { if (e.keyCode === 13) alert("e"); }}
            />
        );

        
    }
}

function mapStateToProps(state, ownProps) {
    return { ideas: state.search };
}

// mapDispatchToProps

export default connect(mapStateToProps)(SearchMain);