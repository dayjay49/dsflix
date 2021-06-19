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