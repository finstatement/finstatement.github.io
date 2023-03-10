import { html, render } from "../lib/lit-html.js";
// import { logout } from "../api/user.js";

{/* <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a> */}
{/* <a @click=${onLogout} href="javascript:void(0)">Logout</a> */}
export const navTemplate = (hasUser) => html`

<nav>
  <div>
    <a href="/home">Home</a>
    <a href="/statements">My Statements</a>
  </div>

${hasUser ? html`  <div class="user">
    <a href="/create">Add Statement</a>

  </div>` :
html`  <div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>`}

</nav>`;

// export function updateNav() {
//     const user = getUserData()
//     render(navTemplate(user), nav);
// }

// function onLogout() {
//     logout();
//     // updateNav()
//     ctx.page.redirect('/');
// }
