const dataBar = JSON.parse(window.apiData);


function barEngineTemplate(beer) {
    return {
        tag: 'section',
        cls: 'beer',
        content: [
            {
                tag: 'img',
                cls: 'beer__image',
                attrs:
                {
                    src: beer.image_url
                }
            },
            {
                tag: 'h2',
                cls: 'beer__tagline',
                content: beer.tagline
            },
            {
                tag: 'p',
                cls: 'beer__abv',
                content: `Крепость напитка ${beer.abv} %`
            }
        ]
    }
}

const cart = templateEngine(barEngineTemplate(dataBar[0]));

const container = document.querySelector('.container');
container.appendChild(
    templateEngine(dataBar.map(barEngineTemplate))
);