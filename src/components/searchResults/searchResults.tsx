import TrackList from '../trackList/tracklist';
import './searchResults.css'
function SearchResults(props: { tracks: { id: number; name: string; artist: string; album: string;}[] 
    onAdd: (track: {id: number; name: string; artist: string; album: string}) => void;
    
}) {
    const trackListProps = {
        tracks: props.tracks,
        onAdd: props.onAdd,
    } as any;

    return (
        <div className='searchResults'>
            <h3>Search Results</h3>
            <TrackList {...trackListProps} />
        </div>
    )
}
export default SearchResults;