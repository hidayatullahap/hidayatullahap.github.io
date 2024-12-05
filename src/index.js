function unmute() {
    var video = document.getElementById('glorp');
    video.muted = !video.muted;
    video.play();
}

async function isServerUp(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
}

function serverStatus() {
    const websites = [{
        id: 'pokemon-status',
        url: 'https://pokemon.kucing.dev/'
    }, {
        id: 'blog-status',
        url: 'https://blog.kucing.dev/',
        alwaysUp: true
    }]

    websites.forEach(website => {
        const statusElement = document.getElementById(website.id);

        if (website?.alwaysUp) {
            statusElement.innerText = 'Website is up';
            return;
        }

        isServerUp(website.url).then((isUp) => {
            const stat = isUp ? 'up' : 'down';
            statusElement.innerText = `Website is ${stat}`;
        });
    });
}

function paralax() {
    let glorp = document.getElementById("glorp-body");
    const parallaxSpeed = 0.01;

    glorp.addEventListener("mousemove", e => {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;

        let _depth1 = `${50 + (_mouseX - _w) * parallaxSpeed}% ${50 + (_mouseY - _h) * parallaxSpeed}%`;
        let _depth2 = `${50 + (_mouseX - _w) * parallaxSpeed * 2}% ${50 + (_mouseY - _h) * parallaxSpeed * 2}%`;
        let _depth3 = `${50 + (_mouseX - _w) * parallaxSpeed * 3}% ${50 + (_mouseY - _h) * parallaxSpeed * 3}%`;

        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        glorp.style.backgroundPosition = x;
    });
}

window.onload = function () {
    document.getElementById('glorp').addEventListener('click', unmute);
    document.title = "prasetyo's mothership"

    serverStatus();
    paralax();
}