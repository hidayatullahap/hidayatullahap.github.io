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
        url: 'https://blog.kucing.dev/'
    }, {
        id: 'pokemon-status',
        url: 'https://pokemon.kucing.dev/'
    }]

    websites.forEach(element => {
        const statusElement = document.getElementById(element.id);

        isServerUp(element.url).then((isUp) => {
            const stat = isUp ? 'up' : 'down';
            statusElement.innerText = `Website is ${stat}`;
        });
    });
}

