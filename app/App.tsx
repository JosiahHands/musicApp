import { useState } from 'react';
import Heading from '../components/heading/heading';
import SearchBar from '../components/searchBar/searchBar';
import SearchResults from '../components/searchResults/searchResults';
import Playlist from '../components/playlist/playlist';
import './app.css'
function App() {
  const [searchResults, setSearchResults] = useState([
    {id: 1, name: 'Song One', artist: 'Artist A', album: 'Album A'},
    {id: 2, name: 'Song One', artist: 'Artist B', album: 'Album B'},
    {id: 3, name: 'Song One', artist: 'Artist C', album: 'Album C'},
  ]);
  return (
    <div>
      <Heading />
      <SearchBar />
      <section className='playlistMakerSection'>
        <SearchResults tracks={searchResults}/> 
        <Playlist />
      </section>
    </div>
  )
}

export default App
