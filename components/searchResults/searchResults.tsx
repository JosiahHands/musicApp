import TrackList from '../trackList/tracklist';
import './searchResults.css'
function SearchResults(props: { tracks: { id: number; name: string; artist: string; album: string;}[] }) {
    return (
        <div className='searchResults'>
            <h3>results</h3>
            <TrackList tracks={props.tracks}/>
        </div>
    )
}
export default SearchResults;