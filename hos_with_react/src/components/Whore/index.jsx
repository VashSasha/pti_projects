import React from 'react';

class Whore extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        const {nickname, id, idx, age, price , handleClickOnWhore} = this.props;
        return (
            <div className="whore" key={idx} onClick={() => handleClickOnWhore(id)}>
                {nickname} {age}, {price}$
            </div>
        );
    }
}

export default Whore