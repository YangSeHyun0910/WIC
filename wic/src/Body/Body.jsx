import './Body.css';
import SearchAndLocation from './SearchAndLocation/SearchAndLocation';
import ResultMap from './ResultMap/ResultMap';
import ResultCafe from './ResultCafe/ResultCafe';

function Body() {

    return (
        <main>
            <SearchAndLocation />
            <ResultMap />
            <ResultCafe />
        </main>
    )
}
export default Body;