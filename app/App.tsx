import Heading from '../components/heading/heading';
import SearchBar from '../components/searchBar/searchBar';
import SearchResults from '../components/searchResults/searchResults';
import Playlist from '../components/playlist/playlist';
import './app.css'
function App() {

  return (
    <div>
      <Heading />
      <SearchBar />
      <section className='playlistMakerSection'>
        <SearchResults />
        <Playlist />
      </section>
    </div>
  )
}

export default App
