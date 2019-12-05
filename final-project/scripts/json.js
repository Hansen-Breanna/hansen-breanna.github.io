// // NAVIGATION MENU

//    //Store XMLH request and JSON file location in variables
//    var newNav = new XMLHttpRequest();
//    var requestURL = 'JSON/link-names.json';

//    //HTTP call using the requestURL variable
//    newNav.open("Get", requestURL, true);
//    newNav.send();

//    //Functions that parses string and displays output
//    newNav.onload = function parseNav() {
//        var nav = JSON.parse(newNav.responseText);
//        var finalString = "";
//        for(var i = 0; i < nav.urlList.length; i++){
//          var navItem = nav.urlList[i];
//          finalString += "<li class='urlList'><a style='color:#fff;' href='" + navItem.url + "'>" + 
//          navItem.name + "</a></li><br>";
//        }
//        document.getElementById('nav-menu').innerHTML = "<ul>" + finalString + "</ul>";
//    }