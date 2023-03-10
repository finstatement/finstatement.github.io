import { html } from "../lib/lit-html.js";

const loginTemplate = (onSubmit) => html`
<h2 class="heading">Login</h2>
    <form @submit=${onSubmit}>
        <label>Email <input type="text" name="email" /></label>
        <label>Password <input type="password" name="password" /></label>
        <button>Login</button>
    </form>
`;

const login