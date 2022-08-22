import React, { Component } from 'react';

class MovieApiFunc extends Component {
    constructor(props) {
        super(props);
        this.state = {user:[]}
    }

    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=t8ymXJ3VOIhmee5bAvhT3YJ0M7cacDH1")
        .then((res)=> {
            res.json()
        .then((data)=> {
            console.log(data.results);
            this.setState({user:data.results})
        })
        })
    }
    render() {
        return (
            <div>
                {this.state.user.map((data,index)=> {
                    return(
                        <div key={index} className="info">
                            <h2>Byline: <span>{data.byline}</span></h2>
                            <h2>Headline: <span>{data.headline}</span></h2>
                            <h2>Title: <span>{data.display_title}</span></h2>
                            <h2>Critic picks: <span>{data.critics_pick}</span></h2>
                        </div>

                    );
                })}
            </div>
        );
    }
}

export default MovieApiFunc;

