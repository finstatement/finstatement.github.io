import { html } from "../lib/lit-html.js";
import { repeat } from '../lib/directives/repeat.js'

import * as statementService from "../data/statement.js";

const catalogTemplate = (list) => html`
<h1>Statements</h1>
${list}
`;

const listTemplate = (statements) => html`
<section>
    ${repeat(statements, r => r.objectId, statementCard)}
</section>`;

const statementCard = (statement) => html`
<article>
    <p>${statement.profession}</p>
    <p>${statement.salary}</p>
    <p>${statement.passive}</p>
</article>`;

export async function catalogView(ctx) {
    ctx.render(catalogTemplate(html`<p>Loading &hellip;</p>`));

    const { results: statements } = await statementService.getAll();

    ctx.render(catalogTemplate(listTemplate(statements)));
};
