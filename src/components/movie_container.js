import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';

class MoviesContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            movies: []
        };
    }

    componentDidMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((response) => {
            this.setState({
                movies: response.data.feed.entry
            })
            console.log('Resp: ', response);
        })
    }

    render(){
        const movieList = this.state.movies.map((movieInfo, index) => {
            return (<Movie info={movieInfo} key={index} />)
            }
        );
        console.log(this.state);

        return(
            <div>
                {movieList}
            </div>
        )
    }
}

export default MoviesContainer;