
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	var config = {
	    applicationId:'d0d663f1-ebaa-4800-bb4d-5c38a5a4d789',
	    applicationRoute:'as-bm-watson.mybluemix.net',
	    applicationSecret:'3db546afc3c163c81cf57904d3ed1880e2a353fd'
	};
	
	console.log("CONFIG: " + JSON.stringify(config));

	//var data = IBMData.initializeService();
	IBMBluemix.initialize(config)
		//.then(IBMData.initializeService())
		.fail(function(err) {
			console.error("ERROR INITIALIZING IBM DATA: " + err);
			return Q.reject(err);
		});

	
}


/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}