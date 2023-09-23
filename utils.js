function Template(content) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Users</title>
            </head>
            <body>
                ${content}
            </body>
        </html>
    `;
}

function getUsers(users) {
    let u = '';
    users.forEach(function (user) {
        const { first, last, job } = user;
        u += `<li>${first} ${last} ${job}</li>`;
    });

    let str = `
        <h1>Users</h1>
        <ul>${u}</ul>
    `;
    return Template(str);
}

function getUsersForm() {
    let str = `
        <form action="/admin/create-user" method="POST">
            <input name="first" value="" placeholder="First Name" />
            <input name="last" value="" placeholder="Last Name" />
            <input name="job" value="" placeholder="Job or profession" />
            <input type="submit" value="Submit" />
        </form>
    `;
    return Template(str);
}

module.exports = { 
    Template,
    getUsersForm,
    getUsers
};
