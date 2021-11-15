let mysql = require("mysql2")

let connection = mysql.createConnection(
    {
        host        : "localhost",
        user        : "root",
        password    : "Patatas21",
        database    : "Museo"
    }
);

connection.connect(function(error){
    if(error)
    console.log(error);
    else console.log("Conexión correcta");
});


// let sql = "SELECT Nombre, Apellidos2, Título FROM Alumnos JOIN Asignaturas ON (Alumnos.idAsignaturas = Asignaturas.id_Alumns)";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Listado alumnos realizado")
//         console.log(result);
//     }
// })

// let sql = "SELECT Nombre, Apellidos, Título FROM Profesores2 JOIN Asignaturas ON (Profesores2.id_Asign = Asignaturas.idAsignaturas)";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Listado Profresores realizado")
//         console.log(result);
//     }
// })







// let sql = "SELECT Prestado, Localizacion, Nombre, Apellidos, Email, Fechadevolución  FROM Piezas JOIN Dueños ON (Piezas.id_dueños = Dueños.idDueños) JOIN Prestado ON (Piezas.id_prestado = Prestado.idPrestado) WHERE Prestado = Prestado";
// connection.query(sql, function(err, result){
//     if (err)
//     console.log(err);
//     else {
//         console.log("Listado realizado")
//         console.log(result);
//     }
// })
