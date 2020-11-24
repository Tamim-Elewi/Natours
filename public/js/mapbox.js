/* eslint-disable */

export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGFtaW0tOTgiLCJhIjoiY2tnc3A5NTlqMDNsaTJ0cGV4ZHRnemZqeiJ9.LlKSCVECta_c4vVVlkE0sA';
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/tamim-98/ckgvl11e20by319o618gli2j4',
        scrollZoom: false
        // center:[-118.113491,34.111745],
        // zoom: 10,
        // interactive: false
        });

        const bounds = new mapboxgl.LngLatBounds();

        locations.forEach(loc => {
            // Create marker
            const el = document.createElement('div');
            el.className = 'marker';
            // Add marker
            new mapboxgl.Marker({
                element: el,
                anchor: 'bottom'
            }).setLngLat(loc.coordinates).addTo(map);

            // Add popup
            new mapboxgl.Popup({
                offset: 30
            })
                .setLngLat(loc.coordinates)
                .setHTML(`<p>Day ${loc.day}: ${loc.description} </p>`)
                .addTo(map);

            // Extend map bound to include current location
            bounds.extend(loc.coordinates);
        });
        map.fitBounds(bounds, {
            padding: {
                top: 200 ,
                bottom: 150,
                left: 100,
                right: 100
            }
        });
}