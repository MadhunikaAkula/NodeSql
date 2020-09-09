const controller = require("../controllers/employee.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/",controller.getAllEmp);
  app.post("/post",controller.postEmp);
  app.put("/update",controller.updateEmp);
  app.delete("/delete",controller.deleteEmp)
};
