import './CurrentLocation.css';
import { MdOutlineLocationSearching } from "react-icons/md";

function CurrentLocation() {

    return (
        <div className='location'>
            <MdOutlineLocationSearching className='currentLocationIcon' size={28}/>
            <div className='currentLocation'>
                현재 위치
            </div>
        </div>
    )
}
export default CurrentLocation;