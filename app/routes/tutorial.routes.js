module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js")
    var router = require("express").Router();

    //create a new Tutorial
    router.post("/", tutorials.create);

    //Rretrieve all Tutorials
    router.get("/", tutorials.findAll);

    //Rretrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    //Rretrieve a single Tutorials with id
    router.get("/:id", tutorials.findOne);

    //Update a  Tutorials with id
    router.put("/:id", tutorials.update);

     //Delete a  Tutorials with id
    router.put("/:id", tutorials.update);
    
    //Create a new Tutorials 
    router.delete("/", tutorials.deleteAll);

    app.use("/api/tutorials", router);
}