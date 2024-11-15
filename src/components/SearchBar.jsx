
import './SearchBar.css';

function SearchBar() {
  return (
    
        <div className="search-bar">
          <div className="input-group">
            <input type="text" placeholder="¿A dónde vas?" />
          </div>
    
          <div className="input-group">
            <input type="text" placeholder="Check-in - Check-out" />
          </div>
    
          <div className="input-group">
            <input type="text" placeholder="Personas por habitación" />
          </div>
    
          <button className="search-button">Buscar</button>
        </div>
    
  );
}

export default SearchBar;
