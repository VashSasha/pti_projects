import React from 'react';

class Movie extends React.Component  {

    convertTime = (time) => {
        const hours = (time / 60);
        const roundHours = Math.floor(hours);
        const minutes = (hours - roundHours) * 60;
        const roundMinutes = Math.round(minutes);

        return `${time} мин. / ${roundHours}:${roundMinutes}`;
    };

    render() {
        const {id, countries, genre, plot, rating, time, title, year, viewType, clickOnTile} = this.props;
        const {convertTime} = this;

        return (
            viewType === 'tiles' ?
                <div className="movie">

                    <div className="movie-image-container" onClick={() => clickOnTile(this.props)}>
                        <a href="#"><img src={`images/movies/${id}.jpg`}/></a>
                    </div>
                    <a className="movie-title" href="#">{title}</a>
                    <div className="movie-details">
                        <span>{year}</span>
                    </div>
                </div> :

                <div className="movie">
                    <div className="movie-image-container">
                        <a href="#"><img src={`images/movies/${id}.jpg`}/></a>
                    </div>
                    <a className="movie-title" href="#">{title}</a>
                    <table className="movie-details">
                        <tr>
                            <th>Год:</th>
                            <td>{year}</td>
                        </tr>
                        <tr>
                            <th>Страна:</th>
                            <td>{countries.join(', ')}</td>
                        </tr>
                        <tr>
                            <th>Жанр:</th>
                            <td>{genre.join(', ')} </td>
                        </tr>
                        <tr>
                            <th>Время:</th>
                            <td>{convertTime(time)}</td>
                        </tr>
                        <tr>
                            <th>Рейтинг:</th>
                            <td>{rating}</td>
                        </tr>
                    </table>
                    <div className="movie-plot">{plot}</div>
                </div>
        );
    }
}

export default Movie;