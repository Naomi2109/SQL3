let mysql = require("mysql2")

let connection = mysql.createConnection(
    {
        host        : "localhost",
        user        : "root",
        password    : "Contraseña",
        database    : "Museo"
    }
);

connection.connect(function(error){
    if(error)
    console.log(error);
    else console.log("Conexión correcta");
});


// let sql = "SELECT Nombre, Apellidos2, Título FROM Alumnos JOIN Asignaturas ON (Alumnos.idAlumnos = Asignaturas.id_Alumns)";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Listado alumnos realizado")
//         console.log(result);
//     }
// })

// let sql = "SELECT Nombre, Apellidos, Título FROM Profesores2 JOIN Asignaturas ON (Profesores2.idProfesores2 = Asignaturas.idAsignaturas)";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Listado Profresores realizado")
//         console.log(result);
//     }
// })



//----
// let sql = "SELECT Nombre, Apellidos, Título FROM Profesores2 JOIN Asignaturas ON (Profesores2.idProfesores2 = Asignaturas.idAsignaturas)";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Listado Profresores realizado")
//         console.log(result);
//     }
// })


let sql = "SELECT Localizacion, Nombre, Apellidos, Email  FROM Piezas JOIN Dueños ON (Piezas.idPiezas = Dueños.idDueños) WHERE Prestado = 'Si'";
connection.query(sql, function(err, result){
    if (err)
    console.log(err);
    else {
        console.log("Listado realizado")
        console.log(result);
    }
})
