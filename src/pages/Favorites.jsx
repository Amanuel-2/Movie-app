import { useFavoriteContext } from "../contexts/MovieProvider";
import MovieCard from "../Component/MovieCard";

function Favorites() {
  const { favorites } = useFavoriteContext();

  if (favorites.length > 0) {
    return (<div>
        <h2 className="text-center text-3xl font-semibold text-lime-400 my-3">Your favorite movies</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    
    </div>
   );
  }

  return (
    <div className="h-[80vh] flex justify-center">
      <div className="text-white text-center bg-[#ffffff1d] mt-28 w-[80%] md:w-[40%] h-80 rounded-2xl">
        <h2 className="text-2xl md:text-4xl text-red-800 font-bold mt-11">
          No Favorite Movies yet
        </h2>
        <p className="text-[1rem] mt-12 text-[#c8c5c5]">
          Start adding movies to your Favorites to watch it later.
        </p>
      </div>
    </div>
  );
}

export default Favorites;
