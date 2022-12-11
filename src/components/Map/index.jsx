import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import style from './Map.module.scss';
import { useSelector } from 'react-redux';
import { drawRoute } from '../../utils';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZWdvcnBhcmlhaCIsImEiOiJjbGF3bG84aTIwZHRnM3hxbW5jcHZyMXFtIn0.486bVliQh0qO-Z81WeZC9A';

export default function Map() {
  const route = useSelector(state => state.order.route);
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

  useEffect(() => {
    if (route.length !== 0) {
      drawRoute(map.current, route);
    } else {
      if (map.current.getLayer('route') !== undefined) {
        map.current.removeLayer('route');
        map.current.removeSource('route');
        map.current.flyTo({
          zoom: 9,
        });
      }
    }
  }, [route]);

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
