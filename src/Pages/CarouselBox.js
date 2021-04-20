import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';




export default class CarouselBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

    }


    render(props) {
        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={"https://image.tmdb.org/t/p/original" + this.props.poster_path}
                            alt="Poster"
                        />
                        <Carousel.Caption>
                            <h1>Godzilla vs. Kong</h1>
                            <p>In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={"https://image.tmdb.org/t/p/original" + this.props.backdrop_path}
                            alt="Backdrop"
                        />
                        <Carousel.Caption>
                            <h1>jhLSJE fhlJEh </h1>
                            <p>lfukvhSEFhvOUESVyfoushy</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}