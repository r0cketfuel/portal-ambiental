"use client";
import "./module.css";

import React, { useState, useEffect, useRef }   from 'react';
import { FontAwesomeIcon }                      from '@fortawesome/react-fontawesome';
import { faLocationDot }                        from '@fortawesome/free-solid-svg-icons';
import datos                                    from './datos.json';

const MapaBahia = () => {
    const [selectedDataTypes, setSelectedDataTypes] = useState({
        calidadAire: true,
        ruido: false,
        boyas: false
    });
    const mapRef = useRef(null);
    const layerMarkersRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const L = require('leaflet');
            require('leaflet/dist/leaflet.css');

            const map = L.map('mapabahia').setView(new L.LatLng(-38.725465, -62.281848), 12);

            // Deshabilita el zoom en el mapa usando la rueda del mouse
            map.scrollWheelZoom.disable()

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 16,
                minZoom: 12,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                opacity: 1,
            }).addTo(map);
            mapRef.current = map;

            const layerMarkers = L.layerGroup().addTo(map);
            layerMarkersRef.current = layerMarkers;

            return () => {
                map.remove();
            };
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            renderMarkers();
        }
    }, [selectedDataTypes]);

    const renderMarkers = () => {
        layerMarkersRef.current.clearLayers();
        Object.keys(selectedDataTypes).forEach(dataType => {
            if (selectedDataTypes[dataType]) {
                const selectedData = datos[dataType];
                Object.keys(selectedData).forEach(sensorKey => {
                    const sensorData = selectedData[sensorKey];
                    const marker = L.marker([sensorData.lat, sensorData.lng]);
                    marker.bindPopup(sensorData.contenido);
                    marker.addTo(layerMarkersRef.current);
                });
            }
        });
    };

    const handleDataTypeChange = (dataType) => {
        setSelectedDataTypes(prevState => ({
            ...prevState,
            [dataType]: !prevState[dataType]
        }));
    };

    return (
        <section id="section2">
            <div className="map-header">
                <div className="map-header-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                <div className="map-header-description">Sensores ambientales</div>
            </div>
            <div id="mapabahia">
                <div className="map-selector">
                <p>Sensores:</p>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedDataTypes.calidadAire}
                            onChange={() => handleDataTypeChange("calidadAire")}
                        />
                        Calidad del aire
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedDataTypes.ruido}
                            onChange={() => handleDataTypeChange("ruido")}
                        />
                        Ruido
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedDataTypes.boyas}
                            onChange={() => handleDataTypeChange("boyas")}
                        />
                        Boyas
                    </label>
                </div>
            </div>
        </section>
    );
};

export default MapaBahia;
