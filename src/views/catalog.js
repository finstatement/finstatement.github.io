import { html } from "../lib/lit-html.js";
import { repeat } from '../lib/directives/repeat.js'

import * as statementService from "../data/statement.js";

const catalogTemplate = (list) => html`
<h1 class="heading">Statements</h1>
${list}
`;

const listTemplate = (statements) => html`
<section>
    ${repeat(statements, r => r.objectId, statementCard)}
</section>`;

const statementCard = (statement) => html`
<article class="statement-card">
    <p>Job Title: ${statement.profession}</p>
    <p>Salary: ${statement.salary}</p>
    <p>Passive Income: ${statement.passive}</p>
    <p><a class="action" href="/statements/${statement.objectId}"><i class="fa-solid fa-up-right-from-square"></i></a></p>
</article>`;

export async function catalogView(ctx) {
    ctx.render(catalogTemplate(html`<p>Loading &hellip;</p>`));

    const { results: statements } = await statementService.getAll();

    ctx.render(catalogTemplate(listTemplate(statements)));
};
