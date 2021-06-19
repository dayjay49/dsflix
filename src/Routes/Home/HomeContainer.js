import { MoviesApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    }  

    getNowPlaying = () => MoviesApi.nowPlaying();
    getUpcoming = () => MoviesApi.upcoming();
    getPopular = () => MoviesApi.popular();

    async componentDidMount() {
        try {
            // JS! WAIT FOR THIS TO FINISH
            const { 
                data: { results: nowPlaying} 
            } = await this.getNowPlaying();
            const {
                data: { results: upcoming}
            } = await this.getUpcoming();
            const {
                data: { results: popular}
            } = await this.getPopular();
            
            // JS knows that nowPlaying:nowPlaying, upcoming:upcoming, popular:popular
            this.setState({
                nowPlaying,
                upcoming,
                popular
            })
            
        } catch(err) {
            console.log(err);
            this.setState({
                error: "Can't find movies information."
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }


    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        return (
            <HomePresenter 
                nowPlaying={nowPlaying} 
                upcoming={upcoming} 
                popular={popular} 
                error={error}
                loading={loading}
            />
        );
    }
}
export default HomeContainer;