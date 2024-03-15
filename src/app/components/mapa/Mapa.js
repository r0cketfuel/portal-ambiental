"use client"
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'; // Si prefieres usar axios en lugar de fetch

const MapaBahia = () => {
    useEffect(() => {
        var mapa = L.map('mapabahia');
        mapa.setView(new L.LatLng(-38.725465, -62.281848), 12);
        var OpenMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 16,
            minZoom: 12,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            opacity: 1,
            scrollWheelZoom: false
        });

        OpenMap.addTo(mapa);

        var layerMarkers = L.layerGroup().addTo(mapa);

        // Sensor 1
        fetch("https://cte.controlambiental.bahia.gob.ar/mediciones/calidad_aire/emcabb1.php")
            .then(response => response.json())
            .then(data => {
                var EMCABB1Lat = -38.743454;
                var EMCABB1Lng = -62.274666;

                var contenido1 = "<div class='nfo'><h4>EMCABB 1</h4>";
                contenido1 += "<div id='valores_emcabb1'>" + data.tablaMarcador + "</div>";
                contenido1 += "</div>";
                var marker1 = L.marker([EMCABB1Lat, EMCABB1Lng]);
                marker1.bindPopup(contenido1);
                marker1.addTo(layerMarkers);
            })
            .catch(error => console.error('Error fetching sensor 1:', error));

        // Agregar solicitudes para los otros sensores de manera similar

        return () => {
            // Limpia el mapa al desmontar el componente
            mapa.remove();
        };
    }, []);

    return (
        <section id="section2">
            <div className="map-header">
                <div className="map-header-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="map-header-description">Sensores ambientales</div>
            </div>
            <div id="mapabahia" style={{ height: '800px' }}></div>
        </section>
    );
};

export default MapaBahia;
