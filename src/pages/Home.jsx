import MovieCard from "../Component/MovieCard"
import React,{useEffect,useState} from 'react'
import {searchMovie,getpopularMovies} from '../services/api'
function Home(){
    const [searchQuery,setSearchQuery]=useState("")
    const [movies,setMovies] = useState([])
    const [error, setError]= useState(null)
    const [loading, setLoading]= useState(true)
    useEffect(()=>{
        const loadpopularMovies= async () =>{
            try{
                const popularMovies = await getpopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log("Error loading movies: ",err);
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        };
        loadpopularMovies()
    },[])

    const searchedmovies = async(e)=>{
        e.preventDefault()
        if(!searchQuery.trim())return;
        if(loading)return;

        try{
            const searchResults= await searchMovie(searchQuery)
            setMovies(searchResults)
            setError(null)
        }   
        catch(err){
            console.log("Error loading movies: ",err)
            setError("Failed to search movies...")
        }   
        finally{
            setLoading(false)
        }  
     
    }

    return <div className="bg-black text-white">
        <form className="text-center gap-4 m-5"
         action=""onSubmit={searchedmovies}>
            <input 
            className="active:bg-black hover:border-lime-200 text-center md:w-[40%] md:h-10 px-10 py-1.5 text-[1rem] border-1 border-lime-400 rounded-2xl mx-3"
            type="text" 
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button className="m-1 bg-lime-400 px-7 py-1.5 mt-5 rounded-2xl font-semibold"
            type="submit">Search</button>
            {error&&<div>{error}</div>}
        </form>
        {loading?<div>Loading...</div>:<div className="grid grid-cols-1 md:grid-cols-3 ">
          {movies.map(movie=>(
           <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>}
      
    </div>
}
export default Home