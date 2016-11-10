import React, { PropTypes } from 'react';
import Highlight from 'react-highlighter';
import Highlighter from 'react-highlight-words';

const IdeaListRow = ({ idea }) =>  {

    const searchWords = ['say', 'do', 'what'];

    return (        
        <tr className="table">
            <td><a href={idea.Link[0]}>link</a></td>
            <td>
                <Highlighter                    
                    searchWords={searchWords}
                    highlightStyle={{ fontWeight: 'bold' }}
                    textToHighlight={idea.Text[0]}
                />
            </td>
        </tr>
    );
}

// <span><Highlight search="pay">{idea.Text}</Highlight></span>

IdeaListRow.propTypes = {
    idea: PropTypes.object.isRequired
}

export default IdeaListRow;


