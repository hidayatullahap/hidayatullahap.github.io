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


window.onload = function () {
    document.getElementById('glorp').addEventListener('click', unmute);
    document.title = "prasetyo's mothership"

    const websites = [{
        id: 'blog-status',
        url: 'https://blog.kucing.dev/',
        alwaysUp: true
    }, {
        id: 'pokemon-status',
        url: 'https://pokemon.kucing.dev/'
    }]

    websites.forEach(website => {
        const statusElement = document.getElementById(website.id);

        if (website.alwaysUp) {
            statusElement.innerText = 'Website is up';
            return;
        }

        isServerUp(website.url).then((isUp) => {
            const stat = isUp ? 'up' : 'down';
            statusElement.innerText = `Website is ${stat}`;
        });
    });
}

