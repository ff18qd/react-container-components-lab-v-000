// Code SearchableMovieReviewsContainer Here

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super();
     
        this.state = {
          reviews: [],
          searchTerm: ""
        };
    }
        
    componentDidMount() {
        fetch(URL)
        	.then(function(response) {
        		if (response.status >= 400) {
        			throw new Error("Bad response from server");
        		}
        		return response.json();
        	})
        	.then((reviews => this.setState({ reviews })));
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;