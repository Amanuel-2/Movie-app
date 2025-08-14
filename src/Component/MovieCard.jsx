import { useFavoriteContext } from "../contexts/MovieProvider";

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteContext();
  const favorite = isFavorite(movie.id);

  function likeClicked(e) {
    e.preventDefault();
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <div className="rounded-t-2xl m-4 relative">
     
      <div className="col-span-1 relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-100 rounded-t-2xl text-center w-full"
        />

        
        <button
          onClick={likeClicked}
          className="absolute top-2 left-2 text-2xl"
          style={{ color: favorite ? "red" : "white" }}
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>

      
      <div className="bg-[#1b1b1b] text-center py-2">
        <h3 className="font-bold">{movie.title}</h3>
        <p className="text-[#b3aeae]">{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
