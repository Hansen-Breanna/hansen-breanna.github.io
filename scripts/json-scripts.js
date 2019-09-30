//SAMPLES
    //Store XMLH request and JSON file location in variables
    var newMenu = new XMLHttpRequest();
    var requestURL = 'JSON/sample.json';

    //HTTP call using the requestURL variable
    newMenu.open("Get", requestURL, true);
    newMenu.send();

    //Function that formats the string, parses, and outputs result
    newMenu.onload = function parse() {
      var menu = JSON.parse(newMenu.responseText);
      document.getElementById('JSONparse').innerHTML = "The URL '" + menu.javascript + "' is from a JSON.";

      //Returns the object to a string
      var stringifyObject = JSON.stringify(menu);

      console.log(stringifyObject);
      console.log(menu);
    };

// NAVIGATION MENU

   //Store XMLH request and JSON file location in variables
   var newNav = new XMLHttpRequest();
   var requestURL = 'JSON/link-names.json';

   //HTTP call using the requestURL variable
   newNav.open("Get", requestURL, true);
   newNav.send();

   //Functions that parses string and displays output
   newNav.onload = function parseNav() {
       var nav = JSON.parse(newNav.responseText);
       document.getElementById('nav-menu').innerHTML = "&lt;a href&equals;&quot;" + nav.javascript + "&quot;&gt;Javascript&lt;&sol;a&gt";
       console.log(nav);
   }
