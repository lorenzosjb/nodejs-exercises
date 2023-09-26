/*
* Login
* vuelve a la pagina del que vivo redireccionado
* si no esas logueado, te manda al login, si podes entrar, te devuelve a la pagina que estabas
*/

const express = require('express');
const jwt = require("jsonwebtoken");

// The secret should be an unguessable long string (you can use a password generator for this!)
// The secret should be a plain string on process.env.JWT_SECRET

const JWT_SECRET = "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
const router = express.Router();

// Formulario login
router.get("/login", (req, res, next) => {
    res.statusCode = 200;
    const fileName = path.join(__dirname, "..", "..", "views", "login.html");
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(fileName);
});

// Verificar al usuario que se loguea
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(`${username} is trying to login ..`);

    // Cuando se crea el usuario se mete en la base de datos el 
    // salt y hash, el password se graba en la bd con el hash

    // falta base de datos o json con usuarios
    // falta carga el nav dependiendo del usuario y si es super usuario para agregar usuarios
    // falta donde se guarda el token

    if (username === "admin" && password === "admin") {
        return res.json({
            token: jwt.sign({ user: "admin" }, JWT_SECRET),
        });
    }

    return res
        .status(401)
        .json({ message: "The username and password your provided are invalid" });
});


/*
    el pincipal tenga el login
    si el usuario tiene login que aparezca el nombre
    pantalla de registro
    pantalla de administrador con un meni que solamente estara disponible para administradores
    pantalla de login (luego meterle si se puede con goofle, facebook, apple)
*/

module.exports = router;

/*
    UserDto
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string Email { get; set; }
        public bool IsDeleted { get; set; }
        public bool? ExpireDate { get; set; }
        public string ExpirationDatePassword { get; set; }
        public string Password { get; set; }
        public string PasswordConfirmation { get; set; }
        public DateTime CreationTime { get; set; }
        public bool? IsLocked { get; set; }
        public int? LoginAttemps { get; set; }
        public int? QuantityDaysToExpire { get; set; }
        public string RecoveryToken { get; set; }
        public DateTime? ExpireTokenTime { get; set; }
        public string Salt { get; set; }
        public string Hash { get; set; }
        public bool IsAdministrator { get; set; }
        public bool IsExternalUser { get; set; }
    }
*/
