// import axios from 'axios';
import React, { Component } from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import './Home.css';


export default class Premiere extends Component {

    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=57f4fe6181b5d03773a6edf861abd58d&language=en-US&page=1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }


    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div className="main">
                    <CardDeck className="card">
                        {items.map(item => (
                            <Card className="cont" style={{ width: '20%' }} key={item.name} >
                                <Card.Img className="image" variant="top" src={"https://image.tmdb.org/t/p/original" + item.poster_path} />
                                <Card.Body>
                                    <Card.Title>{item.original_title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Rating: <span style={{ color: 'green' }}>{item.vote_average}</span></Card.Subtitle>
                                    <Button href={item.homepage}>Подробно</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardDeck>
                </div>
            )
        }
    }
}