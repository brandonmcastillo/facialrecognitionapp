import React from 'react';

const Rank = ({ name, entries}) => {
    return (
        <div>
            <div className="white f3">
                {`Hello there ${name}. Your number of faces tracked is...` }
            </div>
             <div className="white f1">
                {entries}
            </div> 
        </div>
    )
}

export default Rank;