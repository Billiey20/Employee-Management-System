import mysql from 'mysql'


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
});

con.connect(function(err){
    if (err) {
        console.log("connection problem")
    } else{
        console.log("connected successfuly")
    }
})


export default con;