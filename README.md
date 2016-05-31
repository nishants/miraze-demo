# Stubbing RESTful server with miraze
Find samples of request/response [here](https://github.com/nishants/miraze-demo/tree/master/sample).

## 1. Creating a new project
```shell
npm init
npm install miraze --save
```

## 2. Sample script
```javascript
var app = require("miraze").create(),
    port  = 3001;

// A sample template
app.get("/templating")
   .sendFile("./sample/templating/template.json");

// A sample template
app.get("/templating")
   .sendFile("./sample/templating/template.json");

// Reading request header, setting response header
app.get("/request-header")
   .sendFile("./sample/request-header/template.json");

// Reading request body
app.post("/request-body")
   .sendFile("./sample/request-body/template.json");

// Reading request query
app.get("/query")
   .sendFile("./sample/url-param/template.json");

// Fixed and variable paths
app.get("/paths/one").sendFile("./sample/paths/one.json");
app.get("/paths/two").sendFile("./sample/paths/two.json");
app.get("/paths/:id").sendFile("./sample/paths/any.json");

// JS manipulations with controllers
app.get("/controlled")
   .sendFile("./sample/controller/template.json")
   .controller(function(scope){
     scope.message = "Controllified !";
   });

// Using Repeater
app.get("/repeater").sendFile("./sample/repeater/template.json");

app.app.listen(port, function(){
  console.log("running on port : " + port);
});


//directive
app.get("/directive")
    .sendFile("./sample/directive/template.json")
    .controller(function(scope){
      scope.param = "found";
    });

app.directive("@foo", {
  link: function(scope, body, param, compile){
    return compile(scope, {
      child: "{{param}}",
      "@bar": "bar-param",
    });
  }
});

app.directive("@bar", {
  link: function(scope, body, param){
    body.otherChild = "bar";
  }
});
```

## 3. Running script
```shell
node demo.js
```