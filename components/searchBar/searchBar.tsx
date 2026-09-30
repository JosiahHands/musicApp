import './searchBar.css';
function SearchBar() {
    
    return (
        <div className='searchBar'>
            <h3>Wanna find some music? :D</h3>
            <input placeholder='Enter a song title'/>
            <button className='searchButton'>search</button>
        </div>
    ); 
}
export default SearchBar;