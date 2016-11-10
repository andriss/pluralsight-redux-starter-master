import React, { PropTypes } from 'react';
import IdeaListRow from './IdeaListRow';

const IdeaList = ({ ideas }) =>  {
    return (
        <table className="table table-striped">
            <tbody>
                {ideas.map(i => { return <IdeaListRow idea={i} /> })}
            </tbody>
        </table>
    );
}

IdeaList.propTypes = {
    ideas: PropTypes.array.isRequired
}

export default IdeaList;


