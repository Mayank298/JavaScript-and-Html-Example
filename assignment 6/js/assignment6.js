// set a global httpRequest object
var val;
var httpRequest;
window.onload = function() {
	makeRequest(1);
}
// TODO: when the page (window) has loaded, make a
// request for page 1
function makeRequest(pageNum) {
	val = pageNum;
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	var url = "https://reqres.in/api/users?page=" + val;
	//
	// "http://reqres.in/api/users?page=1" // for page 1
	// "http://reqres.in/api/users?page=2" // for page 2
	// etc...
	// make an HTTP request object
	httpRequest = new XMLHttpRequest();
	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	httpRequest.onreadystatechange = showContents;
	// open a asynchronous HTTP (GET) request with the specified url
	httpRequest.open('GET', url, true);
	// send the request
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete
	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
   
   var crtTab = "";
   var mypage = jsData.page;
   var i;
   for(i = 0; i < jsData.data.length;i++){
	   crtTab +="<tr><td>"+jsData.data[i].id+"</td>" + "<td>"+jsData.data[i].first_name+"</td>" + 
				"<td>"+jsData.data[i].last_name+"</td>" + "<td><img src ="+jsData.data[i].avatar + " /></td></tr>";
   }
   document.querySelector('#data').innerHTML = crtTab;
   i = 1;
   while(i<5){
	   //document.querySelector('#pgbtn'+val).className = 'active';
	var x = document.getElementById("pgbtn"+val).id;
	var n = x.indexOf(val);
	if(n > 0 && i === val){
	   document.getElementById('pgbtn'+i).className = "active";
	}
	else{
	   document.getElementById('pgbtn'+i).className = "pgbtn";
	}
		i++;
   }	
			// TODO: remove the class "active" from all elements with the class "pgbtn"
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
		} else {
			console.log('There was a problem with the request.');
		}
	}
}	