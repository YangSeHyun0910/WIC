import { useEffect } from 'react';
// import dotenv from "dotenv";
import './ResultMap.css';

const {kakao} = window;
// const {kakao} = process.env.REACT_APP_KAKAO_MAP_API_KEY;
// const kakao = process.env.REACT_APP_KAKAO_MAP_API_KEY;

function ResultMap() {

    useEffect(() => {
        const container = document.getElementById('map');         //지도를 담을 영역의 DOM 레퍼런스
        const options = {                                         //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.237964, 127.190294), //지도의 중심좌표. 명지대역
            level: 3                                              //지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options);       //지도 생성 및 객체 리턴
    }, [])


    return (
        <div className="resultMap" id="map"></div>
    )
}
export default ResultMap;