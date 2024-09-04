const results = document.querySelector("#result");

async function getUsers() {
    try {
        const response = await fetch("search-user.json");
        console.log(response);

        let res = await response.json();
        console.log(res);

        if (response.status === 200) {
            return res;
        } else {
            throw new Error("Erreur de récupération des données");
        }
    } catch (error) {
        console.error(error);
    }
}

function readUsers() {
    getUsers().then((res) => {
        results.innerHTML = res.map(user => `
            <div>
                <h1>${user.firstname} ${user.lastname}</h1>
                <p>${user.address.details_add}  ${user.address.city}  ${user.address.zip_code}</p>
            </div>
        `)
    });
}

readUsers();