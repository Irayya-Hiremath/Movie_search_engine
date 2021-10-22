import{useState, useEffect} from 'react'


 function Movie(){
     
    let [movieinfo,setMovieinfo]=useState(null);
    let [title,setTitle]=useState('Mission: Impossible');
    
    useEffect(()=>{
        
        // fetch(url)

        //  fetch(`https://omdbapi.com/?t=${title}&apikey=784a9d41`)
        // .then((response)=>response.json())
        // .then((movie)=>{
        //     setMovieinfo(movie);
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
        getMoviedata()
    },[])

    function readTitle(value){
        setTitle(value);
        console.log(value)
    }

    function getMoviedata(){

         fetch(`https://omdbapi.com/?t=${title}&apikey=784a9d41`)
        .then((response)=>response.json())
        .then((movie)=>{
            setMovieinfo(movie);
            console.log('hellloo api')
        })
        .catch((err)=>{
            console.log(err)
        })

    }

   


    return(
        <div>
            <div className="container">
                <div className="padd">
                    <h1>Movie Search</h1>
                </div>
                <div className="input-group">
                     <input type="text" placeholder='Enter Movie Name' onChange={(event)=>{readTitle(event.target.value)}} className='search-field'/>
                     <button type='button' className='btn'onClick={getMoviedata}>Get Movie</button>
                </div>
                {/* //if movie not find this condtion will work */}
               
                {
                    movieinfo?.Error===undefined?(
                

            // </div>
            <div className="movie">
                
                <div className="poster">
                    <img src={movieinfo?.Poster} alt="poster" className='img-poster'/>

                </div>
                <div className="details">
                    <div className="pad">
                        <h1><strong>Title</strong> {movieinfo?.Title}</h1>
                        <p><strong>Genre</strong> {movieinfo?.Genre}</p>
                        <p><strong>Director</strong> {movieinfo?.Director}</p>
                        <p><strong>Plot</strong> {movieinfo?.Plot}</p>
                        <p><strong>Actors</strong> {movieinfo?.Actors}</p>
                        <p><strong>BoxOffice</strong> {movieinfo?.BoxOffice}</p>
                        <p><strong>Language</strong> {movieinfo?.Language}</p>
                        <p><strong>Realeased</strong> {movieinfo?.Released}</p>
                        <p><strong>Runtime</strong> {movieinfo?.Runtime}</p>
                    </div>
                    <div className='ratings'>


                        {
                         movieinfo?.Ratings.map((rating,index)=>(

                            <div key={index}>
                            <strong>{rating.Source}</strong>
                            <h3>{rating.Value}</h3>


                            </div>
                         ))
                        }
                        {/* <p>
                            <strong>{movieinfo?.Ratings[0].Source}</strong>
                            <h3>{movieinfo?.Ratings[0].Value}</h3>
                        </p>
                        <p>
                            <strong>{movieinfo?.Ratings[1].Source}</strong>
                            <h3>{movieinfo?.Ratings[1].Value}</h3>
                        </p>
                        <p>
                            <strong>{movieinfo?.Ratings[2].Source}</strong>
                            <h3>{movieinfo?.Ratings[2].Value}</h3>
                        </p> */}
                    </div>
                
                </div>
               
            </div>
             ):
             
            (  <h1>Movie Not Found</h1> )
            }

            </div>

            
            
        </div>
    )
 }
 export default Movie