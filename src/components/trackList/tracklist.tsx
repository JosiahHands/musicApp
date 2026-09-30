import Track from '../track/track';
import './trackList.css';

function TrackList(props: { tracks: { id: number; name: string; artist: string; album: string;}[];
    onAdd?: (track: {id: number; name: string; artist: string; album: string}) => void;
}) {
    return (
        <div className='trackList'>
            {props.tracks.map(track => (
                <Track key={track.id} track={track} onAdd={props.onAdd} />
            ))}
        </div>
    );
};
export default TrackList;