import './track.css';

function Track(props: {
    track: { id: number; name: string; artist: string; album: string; };
    onAdd?: (track: { id: number; name: string; artist: string; album: string }) => void;
    onRemove?: (track: { id: number; name: string; artist: string; album: string }) => void;
}) {
    const handleAdd = () => {
        if (props.onAdd) {
            props.onAdd(props.track);
        }
    };
    const handleRemove = () => {
        if (props.onRemove) {
            props.onRemove(props.track);
        }
    };
    return (
        <div className='track'>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
            {props.onAdd && <button onClick={handleAdd}>Add</button>}
            {props.onRemove && <button onClick={handleRemove}>Remove</button>}
        </div>
    );
};

export default Track;