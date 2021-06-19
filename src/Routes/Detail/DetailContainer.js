import { MoviesApi, TVApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component{
    constructor(props) {
        super(props);
        const {
            location: { pathname }
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        }
    }

    getMovieDetail = (id) => MoviesApi.movieDetail(id);
    getShowDetail = (id) => TVApi.showDetail(id);

    async componentDidMount() {
        const {
            match: {
                params: { id }
            },
            history: { push },
            
        } = this.props;
        const { isMovie } = this.state;
        const parsedID = parseInt(id);
        if (isNaN(parsedID)) {
            return push("/");
        }
        let result = null;
        try {
            if (isMovie) {
                ({
                    data: result
                } = await this.getMovieDetail(parsedID));
            } else {
                ({
                    data: result
                } = await this.getShowDetail(parsedID));
            } 
            // console.log("Result is: ", result);
        } catch {
            this.setState({
                error: "Can't find anything."
            })
        } finally {
            this.setState({
                loading: false,
                result
            })
        }
    }

    render() {
        // console.log("The state is: ", this.state);
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter 
                result={result} 
                error={error}
                loading={loading}
            />
        );
    }
}
export default DetailContainer;