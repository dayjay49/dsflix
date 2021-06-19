import { TVApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends React.Component{
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    }

    getTopRated = () => TVApi.topRated();
    getPopular = () => TVApi.popular();
    getAiringToday = () => TVApi.airingToday();

    async componentDidMount() {
        try {
            const {
                data: {results: topRated}
            } = await this.getTopRated();
            const {
                data: {results: popular}
            } = await this.getPopular();
            const {
                data: {results: airingToday}
            } = await this.getAiringToday();

            this.setState({
                topRated,
                popular,
                airingToday
            })

        } catch {
            this.setState({
                error: "Can't find TV information."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { topRated, airingToday, popular, error, loading } = this.state;
        return (
            <TVPresenter 
                topRated={topRated} 
                airingToday={airingToday} 
                popular={popular} 
                error={error}
                loading={loading}
            />
        );
    }
}
export default TVContainer;