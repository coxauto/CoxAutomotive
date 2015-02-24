
/* JavaScript content from js/watsonServices.js in folder common */
var watson = {}

watson.qa_inquiry = function() {
    var criteria = {
        dataset: "travel",
        questionText: "Where to go in Seattle?"
    }
    console.log("/**** WATSON QUESTIONS AND ANSWER ****/ - CRITERIA: " + JSON.stringify(criteria));

    $.ajax({
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        type: "POST",
        url: "http://as-bm-watson.mybluemix.net/api/watson-qa",
        data: "dataset="+criteria.dataset+"&questionText="+criteria.questionText
    })
    .done(function(data) {
        console.log("WATSON-QA RESPONSE: " + JSON.stringify(data));
    })
    .fail(function(err) {
        console.log("WATSON-QA ERROR: " + JSON.stringify(err));
    })    
}