import React from 'react';
import { Stop } from '../types';

interface MapViewProps {
  stops: Stop[];
}

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13v-6m0 6l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 10v-6m0 6l-6-3m6 3V7" />
  </svg>
);

const MapView: React.FC<MapViewProps> = ({ stops }) => {
  if (stops.length < 2) {
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center text-slate-300">
            <p>Not enough stops to create a route map.</p>
        </div>
    );
  }

  const origin = encodeURIComponent(stops[0].address);
  const destination = encodeURIComponent(stops[stops.length - 1].address);
  const waypoints = stops
    .slice(1, -1)
    .map(stop => encodeURIComponent(stop.address))
    .join('|');
    
  const mapSrc = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints}&travelmode=walking`;

  return (
    <div className="w-full h-[75vh] rounded-lg border border-slate-700 bg-slate-800 flex flex-col items-center justify-center p-8 text-center">
      <div className="bg-slate-900/50 p-8 rounded-xl shadow-2xl max-w-md">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">View Full Route</h2>
        <p className="text-slate-300 mb-8">
          Click the button below to open an interactive map of the entire running route in Google Maps. You'll be able to see all the stops and get a feel for the journey ahead.
        </p>
        <a
          href={mapSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          <MapIcon />
          Open Route in Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapView;
