
/* JavaScript content from js/mobileData.js in folder common */
var mobileData = {};

mobileData.verifyUser = function() {
    var userInfo = {
        'username': $("#txtLogin").val(),
        'password': $("#txtPassword").val()
    }

    console.log("USERINFO: " + JSON.stringify(userInfo));

    $.ajax({
        method: 'post',
        url: 'http://as-bm-watson.mybluemix.net/api/verifyUser',
        data: userInfo
    })
    .done(function(data) {
        console.log("VERIFY-USER RESPONSE: " + JSON.stringify(data));
        if(data.length == 0) {
        	$("#signInAlert").css({"display": ""});
        	return;
        }
        $.mobile.changePage("#pageUserDashboard");
    })
    .fail(function(err) {
        console.log("VERIFY-USER ERROR: " + JSON.stringify(err));
    });
}

mobileData.createUser  = function() {
    var userInfo = {
        'username': $("#username").val(),
        'password': $("#password").val(),
        'firstname': $("#firstname").val(),
        'lastname': $("#lastname").val(),
        'type': $("#type").val()
    }

    console.log("In CREATE USER block: " + JSON.stringify(userInfo));

    $.ajax({
        method: 'post',
        url: 'http://as-bm-watson.mybluemix.net/api/createUser',
        data: userInfo
    })
    .done(function(data) {
        console.log("CREATE-USER RESPONSE: " + JSON.stringify(data));
        $.mobile.changePage("#pageUserDashboard");
    })
    .fail(function(err) {
        console.log("CREATE-USER ERROR: " + JSON.stringify(err));
    });
}