import { html } from "../lib/lit-html.js";

import * as statementService from "../data/statement.js";
import { submitHandler } from "../util.js";


const createTemplate = (onSubmit) => html`
<h2>Create Statement</h2>
<form @submit=${onSubmit}>
    <label>Profession: <input type="text" name="profession"></label>
    <label>Salary: <input type="number" name="salary"></label>
    <label>Passive: <input type="number" name="passive"></label>
    <button>Create Statement</button>
</form>
`;

export function createView(ctx) {
    ctx.render(createTemplate(submitHandler(onSubmit)));

    async function onSubmit({profession, salary, passive}) {
        salary = Number(salary);
        passive = Number(passive);

        if (profession == "" || salary == "" || Number.isNaN(salary)) {
            return alert('All fields are required');
        }

        const userId = ctx.user?.objectId;

        const result = await statementService.create({profession, salary, passive}, userId);

        ctx.page.redirect("/statement/" + result.objectId);
    }
}