import page from './lib/page.mjs';
import { render, html } from "./lib/lit-html.js";
import { until } from "./lib/directives/until.js";
import { addRender } from './middlewares/render.js';
import { createView } from './views/create.js';
import { addSession } from './middlewares/session.js';
import { getUserData } from './util.js';
import { catalogView } from './views/catalog.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { addUserNav } from './middlewares/userNav.js';
import { navTemplate } from './views/nav.js';

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
page(addRender(document.querySelector('main'), document.querySelector('header')));
page(addSession(getUserData));
page(addUserNav(navTemplate));

page('/', '/create');
page('/statements', catalogView);
page('/statements/:id', ({params: {id}}) => console.log('details', id));
page('/create', createView);
page('/login', loginView);
page('/register', registerView);

page.start();
