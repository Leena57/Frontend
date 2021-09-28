import {useState} from 'react'
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';
// import './SearchBar';
import { render } from 'react-dom';

function App() {

  const [book,setBook] = useState("");
  const [result,setResult] = useState([]);
  
  const [apikey,setApiKey] = useState("AIzaSyDtgtcoGqZeEMYBmffdmMzkSPq_hhPVyIc");


  axios.get("http://localhost:8080/get?q="+book+"&key="+apikey+"&maxResults=40")
  .then(data => {
     console.log(data.data.items);
     setResult(data.data.items);
   })

 
    
    return (
      <div className='SearchBar'>
      <h1>Book Search App</h1>
      <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="q" autoComplete="off" 
        />
        <button type="submit">Search</button>
    </form>
  
       {/* {result.map(book =>(
        <a href={book.volumeInfo.previewLink}>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
        </a>
       ))} */}
  
      </div>
    )
      } 



export default App;
