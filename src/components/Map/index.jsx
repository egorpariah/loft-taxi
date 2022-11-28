import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import style from './Map.module.scss';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWdvcnBhcmlhaCIsImEiOiJjbGF3bG84aTIwZHRnM3hxbW5jcHZyMXFtIn0.486bVliQh0qO-Z81WeZC9A';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.31, 59.93],
      zoom: 9,
    });

    return () => (map.current = null);
  }, []);

  return (
    <div className={style.Map}>
      <div
        data-testid='map'
        className={style.Map__container}
        ref={mapContainer}
      ></div>
    </div>
  );
}
