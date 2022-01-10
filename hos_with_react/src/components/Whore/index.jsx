import React from 'react';

export default ({id, nickname, age, price, onChoose}) => {
    return (
        <div className="whore" onClick={() => onChoose(id)}>
            {nickname} {age}, {price}$
        </div>
    );
};
