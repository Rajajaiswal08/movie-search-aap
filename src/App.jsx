import React,{useEffect,useState} from 'react'

import DisplayBox from './DisplayBox'
import SearchBox from './SearchBox'

function App() {
  const [movie, setMovie] = useState([])
  const [search,setSearch] =useState('')


  const getMovie= async()=>{
    let API = ""
    if(search !=""){
        API=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`   
    }else{
        API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    }
    const response = await fetch(API);
    const data= await response.json();
    // console.log(data);
    setMovie(data.results)
  }

  useEffect(
    () =>{
       getMovie();
    },[search]
  )


const SearchHandlerBar=(value)=>{
    setSearch(value)
}



  return (
    <div className='container border'>
        <SearchBox SearchHandlerBar={SearchHandlerBar}/>
        <DisplayBox movie={movie}/>
    </div>
  )
}

export default App
