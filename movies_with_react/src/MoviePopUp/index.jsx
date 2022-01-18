import React from 'react';

class MoviePopUp extends React.Component {

    convertTime = (time) => {
        const hours = (time / 60);
        const roundHours = Math.floor(hours);
        const minutes = (hours - roundHours) * 60;
        const roundMinutes = Math.round(minutes);

        return `${time} мин. / ${roundHours}:${roundMinutes}`;
    };

    render() {
        const {id, countries, genre, plot, rating, time, title, year, closePopUp} = this.props;
        const {convertTime} = this;
        return (
            <div className="pop-up" >
                <div className="movie">
                <span className="close-popup" onClick={closePopUp}>&#10060;</span>
                    <div className="movie-image-container">
                        <a href="#"><img src={`images/movies/${id}.jpg`} /></a>
                    </div>
                    <a className="movie-title" href="#"><h2>{title}</h2></a>
                    <table className="movie-details">
                        <tr>
                            <th>Год:</th>
                            <td>{year}</td>
                        </tr>
                        <tr>
                            <th>Страна:</th>
                            <td>{countries}</td>
                        </tr>
                        <tr>
                            <th>Жанр:</th>
                            <td>{genre}</td>
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
            </div>
        );
    }

}

export default MoviePopUp;

/*


 */