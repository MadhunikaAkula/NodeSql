const { clientdb } = require('../setConfig')
exports.getAllEmp = async (req, res) => {
  try {
    //INNER JOIN
    // const query = `SELECT e."name",e."email",e."address",d."deptName" FROM public.employees as e INNER JOIN
    // public.dapartments as d  ON e."deptId"= d."deptId" where id=${req.body.id}`;
    //left outer join
    // const query=`SELECT * FROM employees as e LEFT OUTER JOIN dapartments as b ON (e."deptId" = b."deptId")`;
    //right outer join
    //  const query=`SELECT * FROM employees as e RIGHT OUTER JOIN dapartments as b ON (e."deptId" = b."deptId")`;
    //distinct
    // const query=`SELECT DISTINCT bcolor  FROM  distinct_demo ORDER BY  bcolor;`;
    // const query = `SELECT name,email,address FROM employees WHERE id IN (1, 2)`
    // const query = `SELECT header_text,now() - posting_date as FROM documents`
    const query=`select * from orders`;

    const result = await clientdb.query(query);
    console.table(result.rows)

    res.end(JSON.stringify(result))
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.postEmp = async (req, res) => {
  console.log(req.body);
  try {
    const results = await clientdb.query("insert into employees values ($1,$2,$3,$4,$5)", [req.body.id, req.body.name, req.body.email, req.body.address, req.body.deptId]);
    res.end({ message: "User was registered successfully!" });
  } catch (err) {
    res.status(500).send(err);
  }
}
exports.updateEmp = async (req, res) => {
  console.log(req.body);
  try {
    await clientdb.query('UPDATE employees  SET name=$1,email=$2,address=$3 where id=$4', [req.body.name, req.body.email, req.body.address, req.body.id]);
    res.end({ message: "User updated  successfully!" });
  } catch (err) {
    res.status(500).send(err);
  }
}
exports.deleteEmp = async (req, res) => {
  console.log(req.body);
  try {
    await clientdb.query('DELETE FROM employees where id=$1', [req.body.id]);
    res.end({ message: "User deleted  successfully!" });
  } catch (err) {
    res.status(500).send(err);
  }
}

