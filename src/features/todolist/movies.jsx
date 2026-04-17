import { useGetAllMoviesQuery } from "../../services/moviesApi";

function Movies() {
    const { data, isLoading } = useGetAllMoviesQuery();
    return (
        <div>
            <h1>Movies</h1>
            {
                console.log(data?.movies)
            }
            {isLoading && <h3>Loading...</h3>}
            {!isLoading && (
                <ul>
                    {data.movies.map((movie) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Movies;