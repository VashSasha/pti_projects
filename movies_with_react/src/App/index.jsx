import React from 'react';

import $ from 'jquery';
import _ from 'underscore';
// import _ from 'lodash';
import '../index.css';

import Movie from '../Movie';
import MoviePopUp from '../MoviePopUp';

class App extends React.Component {
    state = {
        movies: [],
        itemsPerPage: 'default',
        viewType: 'tiles',
        showPopUp: false,
        popUpMovie: {},
        filter: 'default',
        filterInput: '',
        groupFilter: []
    };

    viewTypeButtons = [
        {
            title: 'Списком',
            viewType: 'list'
        }, {
            title: 'Плитками',
            viewType: 'tiles'
        }
    ]

    componentDidMount() {
        $.get("http://127.0.0.1:3000/movies", response => {
            this.setState(
                {
                    movies: response,
                    movieGroupCountry: this.groupMovies(response, 'countries'),
                    movieGroupGenre: this.groupMovies(response, 'genre')
                }
            )
        }, "json");
    }

    changeView = (e) => {
        console.log(e.target.dataset.viewType);
        const viewType = e.target.dataset.viewType
        this.setState({viewType: viewType})
    };

    clickOnTile = (props) => {
        console.log(props)
        this.setState((state) => ({
            showPopUp: true,
            popUpMovie: props
        }))
    };

    closePopUp = (e) => {
        if (e.keyCode === 27) {
            this.setState({
                showPopUp: false,
                pupUpMovie: {}
            })
        }

        this.setState({
            showPopUp: false,
            pupUpMovie: {}
        })
    };

    filterBy = (e) => {
        const filter = e.target.value;
        console.log(filter);
        this.setState({filter: filter})
    };

    onInput = (e) => {
        const value = e.target.value;
        console.log(value);
        this.setState({filterInput: value})
    };

    getSortedTasks = movies => {
        // this.showGroup();
        const filter = this.state.filter;
        // const filterInfoArr = filter.split('_');
        // const filterInfo = {
        //     direction: filterInfoArr[0],
        //     el: filterInfoArr[1]
        // }

        // console.log(filterInfo)

        return movies.sort(function (a, b) {

            const title1 = a.title.toUpperCase();
            const title2 = b.title.toUpperCase();

            if (filter === 'default') {
                return true;
            }

            if (filter === 'ascending_title') {
                return (title1 < title2) ? -1 : (title1 > title2) ? 1 : 0;
            }

            if (filter === 'descending_title') {
                return (title1 < title2) ? 1 : (title1 > title2) ? -1 : 0;
            }

            if (filter === 'ascending_rating') {
                const A = a.rating;
                const B = b.rating;
                return (A < B) ? -1 : (A > B) ? 1 : 0;
            }

            if (filter === 'descending_rating') {
                const A = a.rating;
                const B = b.rating;
                return (A < B) ? 1 : (A > B) ? -1 : 0;
            }

            if (filter === 'ascending_year') {
                const A = a.year;
                const B = b.year;
                return (A < B) ? -1 : (A > B) ? 1 : 0;
            }

            if (filter === 'descending_year') {
                const A = a.year;
                const B = b.year;
                return (A < B) ? 1 : (A > B) ? -1 : 0;
            }

            if (filter === 'ascending_time') {
                const A = a.time;
                const B = b.time;
                return (A < B) ? -1 : (A > B) ? 1 : 0;
            }

            if (filter === 'descending_time') {
                const A = a.time;
                const B = b.time;
                return (A < B) ? 1 : (A > B) ? -1 : 0;
            }

        });
    };

    handleCheckBox = (e) => {
        const country = e.target.value;
        let filter = this.state.groupFilter;

        if (filter.includes(country)) {
            filter = _.without(filter, country);
        } else {
            filter.push(country);
        }

        this.setState({groupFilter: filter});
    };

    filterByCountries = () => {
        const filterArr = this.state.groupFilter;
       return this.state.movies.filter((movie) => {
          return filterArr.every((el, i) => movie.countries.includes(el));
        })
    };

    getSearchedTask = movies => {
        const filter = this.state.filterInput;
        return movies.filter(function (movie) {
            return movie.title.toLowerCase().includes(filter.toLowerCase());
        });

    };

    groupMovies = (list, key) => {
        return _.countBy(_.flatten(_.pluck(list, key)));
     };

    render() {
        console.log(this.state);

        const {changeView, viewTypeButtons, clickOnTile, closePopUp, filterBy, getSearchedTask, getSortedTasks, onInput, handleCheckBox, filterByCountries, groupMovies} = this;
        const {movies, itemsPerPage, viewType, showPopUp, popUpMovie, filterInput, groupFilter, } = this.state;

        const movieGroupCountry = groupMovies(movies, 'countries')
        const movieGroupGenre = groupMovies(movies, 'genre')

        // const movieList = getSortedTasks(getSearchedTask(movies));
        const movieList = groupFilter.length > 0 ? getSortedTasks(getSearchedTask(filterByCountries())) : getSortedTasks(getSearchedTask(movies)) ;
        console.log(groupFilter)

        return (
            <div className="app">
                <div className="top-bar">
                    <div className="search">
                        Поиск:
                        <input type="text" onChange={onInput} value={filterInput} />
                    </div>

                    <div className="items-per-page">
                        На странице:
                        <select>
                            <option value="default" selected>все фильмы</option>
                            <option value="6">по 6 фильмов</option>
                            <option value="12">по 12 фильмов</option>
                            <option value="18">по 18 фильмов</option>
                        </select>
                    </div>

                    <div className="sort">
                        Сортировать:
                        <select onChange={filterBy}>
                            <option value="default" selected>по умолчанию</option>
                            <option value="ascending_title">по алфавиту &uarr;</option>
                            <option value="descending_title">по алфавиту &darr;</option>
                            <option value="ascending_rating">по рейтингу &uarr;</option>
                            <option value="descending_rating">по рейтингу &darr;</option>
                            <option value="ascending_year">по году &uarr;</option>
                            <option value="descending_year">по году &darr;</option>
                            <option value="ascending_time">по длительности &uarr;</option>
                            <option value="descending_time">по длительности &darr;</option>
                        </select>
                    </div>

                    <div className="view-type">
                        Отображать:
                        {
                            viewTypeButtons.map((button, idx) => {
                                const className = viewType === button.viewType ? 'active' : '';
                                return <button className={className} data-view-type={button.viewType}
                                               onClick={changeView} key={idx}>{button.title}</button>
                            })
                        }
                    </div>
                </div>

                <div className="filters">
                    <h4>Фильтры</h4>

                    <div className="countries">

                        Страна:
                        {
                            Object.entries(movieGroupCountry).map(([key, val], idx) => (
                                 <>
                                     <input type="checkbox" value={key} id={key} key={idx} onChange={handleCheckBox} />
                                    <label htmlFor={key} key={key}>{key} ({val}) | </label>
                                </>
                            ))
                        }

                    </div>

                    <div className="genres">
                        Жанр:
                        {
                            Object.entries(movieGroupGenre).map(([key, val], idx) => (
                                <>
                                    <input type="checkbox" value={key} id={key} key={idx} />
                                    <label htmlFor={key} key={key}>{key} ({val}) | </label>
                                </>
                            ))
                        }
                    </div>
                </div>

                {
                    itemsPerPage !== 'default' ?
                        <div className="pagination">
                            <button className="active">1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                        </div> :
                        null
                }

                <div className={`movies state-${viewType}`}>
                    {
                        movieList.map((movie, idx) => (
                            <Movie {...movie} key={idx}
                                   viewType={viewType}
                                   clickOnTile={clickOnTile}
                                   showPopUp={showPopUp}
                            />
                        ))
                    }
                </div>

                {
                    showPopUp ?
                        <MoviePopUp {...popUpMovie}
                                    closePopUp={closePopUp}
                        /> :
                        null
                }
            </div>
        );
    }

}

export default App;

/*
<input type="checkbox" value="" id=""/>
                        <label htmlFor="">США (4)</label>

                        <input type="checkbox" value="" id=""/>
                        <label htmlFor="">СССР (1)</label>

                        <input type="checkbox" value="" id=""/>
                        <label htmlFor="">Великобритания (1)</label>

 */