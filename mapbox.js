'use strict'

mapboxgl.accessToken = 'pk.eyJ1IjoicGVodSIsImEiOiJja3R4Y3diNmIybTg5Mm9waWgwYTdsc3FyIn0.lVvnPZ3aa6332EaWJIxPaQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [2.3590754609420355, 48.900849907738895],
    zoom: 10,
    maxBounds: [
        [-4.495794628218503, 42.421033237346265], // 南西座標
        [9.628419119864942, 51.13404926979396] // 北東座標
    ]
});
map.addControl(new mapboxgl.NavigationControl());

const h2 = document.querySelector('#modal h2');
const p = document.querySelector('#modal p');
const dialogModal = document.querySelector('#modal');
const closeButton = document.querySelector('#modal button');
closeButton.addEventListener('click', () => {
    const h2 = document.querySelector('#modal h2');
    const p = document.querySelector('#modal p');
    h2.textContent = "";
    p.textContent = "";
    document.querySelector('#modal ol').remove();
    dialogModal.close();
});

// add markers to map
function indexJson(indexJson) {
    for (const marker of indexJson) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';
        el.setAttribute('data-tag', marker.properties.tag);
        el.style.backgroundImage = `url('${marker.properties.cover}')`;
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

        el.addEventListener('click', (e) => {
            map.flyTo({
                center: marker.geometry.coordinates,
                zoom: 17.5
            })
            h2.innerText = marker.properties.title;
            p.innerHTML = marker.properties.description;
            const directory = "https://ia600605.us.archive.org/10/items/that_be_in_fr/that_be_in_fr";
            if (marker.properties.archive) {
                const ol = document.createElement('ol');
                dialogModal.appendChild(ol);
                for (const archive of marker.properties.archive) {
                    const li = document.createElement('li');
                    ol.appendChild(li);
                    if (archive[0] == "img") {
                        const img = document.createElement('img');
                        img.src = directory + archive[1];
                        li.appendChild(img);
                    } else if (archive[0] == "video") {
                        const video = document.createElement('video');
                        video.setAttribute("controls", true)
                        li.appendChild(video);
                        const source = document.createElement('source');
                        source.src = directory + archive[1];
                        video.appendChild(source);
                    };
                };
                ol.addEventListener('wheel', (e) => {
                    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
                    const maxScrollLeft = ol.scrollWidth - ol.clientWidth;
                    if (
                        (ol.scrollLeft <= 0 && e.deltaY < 0) ||
                        (ol.scrollLeft >= maxScrollLeft && e.deltaY > 0)
                    ) return;
                    e.preventDefault();
                    ol.scrollLeft += e.deltaY;
                }, false);
            } else {
                const ol = document.createElement('ol');
                ol.style.backgroundImage = `url('${marker.properties.cover}')`;
                dialogModal.appendChild(ol);
            };

            if (typeof dialogModal.showModal === "function") {
                dialogModal.showModal();
            } else {
                alert("The dialog API is not supported by this browser");
            }
        })
    };
};

function area(lng, lat, zoom) {
    map.flyTo({
        center: [lng, lat],
        zoom: zoom
    })
};