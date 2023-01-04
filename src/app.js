import page from './lib/page.mjs';
import { render, html } from "./lib/lit-html.js";
import { until } from "./lib/directives/until.js";
import * as api from "./data/user.js";
import * as request from './data/api.js';
import * as statement from './data/statement.js';
import { addRender } from './middlewares/render.js';
import { createView } from './views/create.js';
import { addSession } from './middlewares/session.js';
import { getUserData } from './util.js';


window.api = api;
window.request = request;
window.statement = statement;

const strings = {
    BG: {
        greeting: "Здравей!"
    },
    EN: {
        greeting: "Hello there!"
    }
}

const locale = 'BG';

const homeTemplate = (strings) => html`
<h1>${strings[locale].greeting}</h1>`

async function delayed() {
    await new Promise(r => setTimeout(r, 500));

    return homeTemplate(strings);
}

function home() {
    render(until(delayed(), html`<p>Loading...</p>`), document.body);
}

// Функция майка на Context Decorator, която 
// може да носи общите неща в себе си!
page(addRender(document.querySelector('main')));
page(addSession(getUserData));

page('/', '/create');
page('/statement', () => console.log('catalog'));
page('/statement/:id', ({params: {id}}) => console.log('details', id));
page('/create', createView);

page.start();
