"use client"; // Se agrega "use client" para usar hooks

import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./module.css";
import datos from './datos.json';

const MapaBahia = () => {
    const [selectedDataType, setSelectedDataType] = useState('calidadAire');
    const mapRef = useRef(null);
    const layerMarkersRef = useRef(null);

    useEffect(() => {
        // Crear el mapa una vez
        const map = L.map('mapabahia').setView(new L.LatLng(-38.725465, -62.281848), 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 16,
            minZoom: 12,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            opacity: 1,
            scrollWheelZoom: false
        }).addTo(map);
        mapRef.current = map;

        // Crear una capa de marcadores una vez
        const layerMarkers = L.layerGroup().addTo(map);
        layerMarkersRef.current = layerMarkers;

        return () => {
            map.remove();
        };
    }, []);

    useEffect(() => {
        renderMarkers();
    }, [selectedDataType]);

    const renderMarkers = () => {
        const selectedData = datos[selectedDataType];
        layerMarkersRef.current.clearLayers(); // Limpiar marcadores existentes
        Object.keys(selectedData).forEach(sensorKey => {
            const sensorData = selectedData[sensorKey];
            const marker = L.marker([sensorData.lat, sensorData.lng]);
            marker.bindPopup(sensorData.contenido);
            marker.addTo(layerMarkersRef.current);
        });
    };

    const handleDataTypeChange = (dataType) => {
        setSelectedDataType(dataType);
    };

    return (
        <section id="section2">
            <div className="map-header">
                <div className="map-header-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="map-header-description">Sensores ambientales</div>
            </div>
            <div id="mapabahia">
                <div className="leaflet-control map-selector">
                    <select value={selectedDataType} onChange={(e) => handleDataTypeChange(e.target.value)}>
                        <option value="calidadAire">Calidad del aire</option>
                        <option value="ruido">Ruido</option>
                        <option value="boyas">Boyas</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default MapaBahia;
