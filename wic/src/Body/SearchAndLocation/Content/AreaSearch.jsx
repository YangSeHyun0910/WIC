import { useState } from 'react';
import './AreaSearch.css';

function AreaSearch() {

    const [search, setSearch] = useState('');

    return (
        <>장소 검색 : 
            <input className="areaSearchBox" placeholder='장소검색' />
        </>
    )
}
export default AreaSearch;