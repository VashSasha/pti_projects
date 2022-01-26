import React from 'react';

import Movie from "../Movie";

class Pagination extends React.Component {


    render() {
        const {itemsPerPage, movies} = this.props;
        const paginationCount = Math.ceil( movies.length / itemsPerPage);
        return (
            <div className="pagination">
                {
                    [...Array(paginationCount)].map((e, idx) => {
                       return <button key={idx} value={idx}>{idx + 1}</button>
                    })
                }
            </div>
        )
    }

}

export default Pagination;

