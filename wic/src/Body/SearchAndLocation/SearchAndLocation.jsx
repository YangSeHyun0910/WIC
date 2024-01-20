import './SearchAndLocation.css';
import AreaSearch from './Content/AreaSearch';
import CurrentLocation from './Content/CurrentLocation';

function SearchAndLocation() {

    return(
        <div className='searchAndLocation'>
            <AreaSearch />
            <CurrentLocation />
        </div>
    )
}
export default SearchAndLocation;
