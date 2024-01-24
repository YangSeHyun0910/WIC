import './SearchAndLocation.css';
import AreaSearch from './Content/AreaSearch';
import CurrentLocation from './Content/CurrentLocation';
import StoreSearch from './Content/StoreSearch';

function SearchAndLocation() {

    return(
        <div className='searchAndLocation'>
            <AreaSearch />
            <StoreSearch />
            <CurrentLocation />
        </div>
    )
}
export default SearchAndLocation;
