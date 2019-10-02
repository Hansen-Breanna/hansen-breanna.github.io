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
      document.getElementById('JSONparse').innerHTML = "<pre><code>The URL '" + menu.javascript + "' is from a JSON.</code></pre>";

      //Returns the object to a string
      var stringifyObject = JSON.stringify(menu);
      var stringSlice1 = stringifyObject.slice(0, 32);
      var stringSlice2 = stringifyObject.slice(32, 70);
      var stringSlice3 = stringifyObject.slice(70, 89);
      document.getElementById('objStringify').innerHTML = stringSlice1 + "<br>&nbsp;&nbsp;" + stringSlice2
        + "<br>&nbsp;&nbsp;" + stringSlice3;
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
       console.log(nav.urlList);
       var finalString = "";
       for(var i = 0; i < nav.urlList.length; i++){
         var navItem = nav.urlList[i];
         finalString += "<li class='jsonList'><a style='color:#fff;' href='" + navItem.url + "'>" + 
         navItem.name + "</a></li><br>";
       }
       document.getElementById('nav-menu').innerHTML = "<ul>" + finalString + "</ul>";
       console.log(nav);
   }

   