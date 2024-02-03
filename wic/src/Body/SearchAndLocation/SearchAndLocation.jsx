import './SearchAndLocation.css';
import AreaSearch from './Content/AreaSearch';
import CurrentLocation from './Content/CurrentLocation';
import StoreSearch from './Content/StoreSearch';

function SearchAndLocation() {

    return (
        <div>
            <div className='searchAndLocation'>
                <AreaSearch />
                <CurrentLocation />
            </div>
            <div className='store'>
                <StoreSearch />
            </div>
        </div>
    )
}
export default SearchAndLocation;
