import React from 'react';

import axios from 'axios';

export default class MovieList extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/550?api_key=57f4fe6181b5d03773a6edf861abd58d`)
            .then(res => {
                const movies = res.data;
                this.setState({ movies });
                console.log(res)
            })
    }

    render() {
        return (
            <ul>
                { this.state.movies.map(movies => <li>{movies.name}</li>)}
            </ul>
        )
    }
}