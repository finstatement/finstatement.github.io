export function addUserNav(navTemplate) {
    let hasUser = false;

    return function (ctx, next) {
        if (Boolean(ctx.user) != hasUser) {
            hasUser = Boolean(ctx.user);
            ctx.renderNav(navTemplate());
        }

        next();
    }
}