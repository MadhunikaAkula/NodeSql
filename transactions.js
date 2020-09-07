const { Client } = require('pg');

//configuration
const client = new Client({
    user:"postgres",
    password:"root",
    host:"localhost",
    port:5432,
    database:"Demo"
});
async function execute(){
    try{
        await client.connect();
        console.log("connected");
        await client.query("BEGIN");
        // const results=await client.query("insert into employees values ($1,$2,$3,$4)",[15,'ndhbh','nag5@gmail.com','hdgfggrgg']);
        // console.table(results.rows);
        const {rows}=await client.query("select * from employees")
        await client.query("COMMIT");
    }catch(ex){
        console.log("failed");
        await client.query("ROLLBACK");

    }finally{
        await client.end();
        console.log("ended successfully");
    }
}
execute();






// client.connect()
// .then(()=>console.log("connected successfully"))
// .then(()=>client.query("insert into employees values ($1,$2,$3,$4)",[5,'nag','nag@gmail.com','hdggg']))
// .then(()=>client.query("select * from employees where name=$1",["madhu"]))
// .then(()=>client.query("select * from employees"))
// .then(results=>console.table(results.rows))
// .catch(e=>console.log(e))
// .finally(()=>client.end());
