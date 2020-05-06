/*  
    edit.js
 
    MediaWiki API Demos
    Demo of `Edit` module: POST request to edit a page

    MIT license
*/

var request = require('request').defaults({jar: true}),
    url = "https://edv.caritas-dicvhildesheim.de/api.php";

// Step 1: GET request to fetch login token
function getLoginToken() {
    var params_0 = {
        action: "query",
        meta: "tokens",
        type: "login",
        format: "json"
    };

    request.get({ url: url, qs: params_0 }, function (error, res, body) {
        if (error) {
            console.log(error);
            return;
        }
        var data = JSON.parse(body);
        loginRequest(data.query.tokens.logintoken);
    });
}

// Step 2: POST request to log in. 
// Use of main account for login is not
// supported. Obtain credentials via Special:BotPasswords
// (https://www.mediawiki.org/wiki/Special:BotPasswords) for lgname & lgpassword
function loginRequest(login_token) {
    console.log(login_token);
    var params_1 = {
        action: "login",
        lgname: "Meier@autodocu",
        lgpassword: "mt2u2nma2k36bna7vttom910dpgj399v",
        lgtoken: login_token,
        format: "json"
    };

    request.post({ url: url, form: params_1 }, function (error, res, body) {
        if (error) {
            console.log(error);
            return;
        }
        console.log(body);
        getCsrfToken();
    });
}

// Step 3: GET request to fetch CSRF token
function getCsrfToken() {
    var params_2 = {
        action: "query",
        meta: "tokens",
        format: "json"
    };

    request.get({ url: url, qs: params_2 }, function(error, res, body) {
        if (error) {
            console.log(error);
            return;
        }
        var data = JSON.parse(body);
        console.log(body);
        editRequest(data.query.tokens.csrftoken);
    });
}

// Step 4: POST request to edit a page
function editRequest(csrf_token) {
    var params_3 = {
        action: "edit",
        title: "Sandbox",
        appendtext: "test edit",
        token: csrf_token,
        format: "json"
    };

    request.post({ url: url, form: params_3 }, function (error, res, body) {
        if (error) {
            console.log(error);
            return;
        }
        console.log(body);
    });
}

export default {
test: getLoginToken
}