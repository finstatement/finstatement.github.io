import { html } from "../lib/lit-html.js";
import { repeat } from '../lib/directives/repeat.js'

import * as statementService from "../data/statement.js";

const catalogTemplate = (list) => html`
<h1>Statements</h1>
${list}
`;

const ListTemplate = (rooms) => html`
<section>
    ${repeat(rooms, r => r.objectId, roomCard)}
</section>`;

const roomCard = (room) => html`
`;

export async function catalogView(ctx) {
    ctx.render(html`<p>Loading &hellip;</p>`);

    const rooms = await roomService.getAll();

    ctx.render(listTemplate(rooms));
};
