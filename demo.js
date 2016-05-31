var miraze = require("miraze").create(),
    port  = 3001;;

// A sample template
miraze.get("/templating")
    .sendFile("./sample/templating/template.json");

// A sample template
miraze.get("/templating")
    .sendFile("./sample/templating/template.json");

// Reading request header, setting response header
miraze.get("/request-header")
    .sendFile("./sample/request-header/template.json");

// Reading request body
miraze.post("/request-body")
    .sendFile("./sample/request-body/template.json");


miraze.get("/get/:id").sendFile("./sample/request-path-param.json");
miraze.get("/params").sendFile("./sample/request-url-param.json");
miraze.get("/hello").sendFile("./sample/hello.json");
miraze.post("/repeater").sendFile("./sample/repeater-indline.json");

miraze.get("/check").sendFile("./sample/nested-repeater.json").controller(function(scope){
  scope.list = [["a1", "a2", "a3"],["b1", "b2", "b3"], ["c1", "c2", "c3"]];
});

miraze.get("/samples/hello").sendFile("./sample/hello/template.json");
miraze.post("/samples/request").sendFile("./sample/request/template.json");
miraze.post("/mirror").sendFile("./sample/mirror/template.json");

miraze.get("/samples/controller")
    .sendFile("./sample/controller/template.json")
    .controller(function(scope){
      scope.message = "Controllified !";
    });

miraze.get("/samples/repeater")
    .sendFile("./sample/repeater/template.json");

miraze.app.listen(port, function(){
  console.log("running on port : " + port);
});

//variable/contract paths
miraze.get("/samples/paths/one").sendFile("./sample/paths/one.json");
miraze.get("/samples/paths/two").sendFile("./sample/paths/two.json");
miraze.get("/samples/paths/:id").sendFile("./sample/paths/any.json");

