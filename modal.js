'use strict'

function archiveJson(indexJson) {
    let i;
    const modal = document.querySelector('#modal');
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    for (i = 0; i < indexJson.index.length; i++) {
        const ol = document.createElement('ol');
        ol.dataset.title = indexJson.index[i].title;
        ol.dataset.description = indexJson.index[i].description;
        modal.appendChild(ol);
        if (i == 0) {
            ol.hidden = false;
            title.textContent = indexJson.index[i].title;
            description.innerHTML = indexJson.index[i].description;
        } else {
            ol.hidden = true;
        };

        for (const image of indexJson.index[i].image) {
            const li = document.createElement('li');
            ol.appendChild(li);
            if (image[0] == "img") {
                const img = document.createElement('img');
                img.src = indexJson.archive + image[1];
                li.appendChild(img);
            } else if (image[0] == "video") {
                const video = document.createElement('video');
                video.setAttribute("controls", true)
                li.appendChild(video);
                const source = document.createElement('source');
                source.src = indexJson.archive + image[1];
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
    };
};

window.addEventListener("load", () => {
    const olAll = document.querySelectorAll('ol');
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const next = document.querySelector('#next');
    const past = document.querySelector('#past');

    let ii = 0;
    function thisArticle() {
        for (const thisOl of olAll) {
            thisOl.hidden = true;
        };
        title.textContent = olAll[ii].dataset.title;
        description.innerHTML = olAll[ii].dataset.description;
        olAll[ii].hidden = false;
    };

    next.addEventListener('click', function () {
        if (ii == 0) {
            ii++;
        } else if (ii == 1) {
            ii++;
        } else if (ii < olAll.length - 1) {
            ii++;
        } else if (ii == olAll.length - 1) {
            ii = 0;
        };
        thisArticle();
    }, false);

    past.addEventListener('click', function () {
        if (ii == 0) {
            ii = olAll.length - 1;
        } else if (ii == 1) {
            ii--;
        } else if (ii < olAll.length - 1) {
            ii--;
        } else if (ii == olAll.length - 1) {
            ii--;
        };
        thisArticle();
    }, false);
});