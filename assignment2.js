/*********************************************************************************
* WEB222 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Mayankkumar Patel Student ID: 115493165 Date: 04/02/2017
*
********************************************************************************/ 

/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */
var CustomerDB = {
  customer: [], 
  address: [],
  store: [],
  insertData: function(someData) {
    // console.log()'s will be replaced with data insertion methods
    console.log(someData);
    for (var i = 0; i < someData.length; i++) {
      if(someData[i].type == "store") {CustomerDB.addStore(someData) }
      else if(someData[i].type == "customer") { CustomerDB.addCustomer(someData) }
      else if(someData[i].type == "address") { CustomerDB.addAddress(someData) }
    }
  },
  
  // Get the customer's current time and push it to the array
  addCustomer: function(customerObj) {
    
    customerObj.add_date =  new Date();
     this.customer.push(customerObj);
   
  },
  addAddress: function(addressObj) {
    this.address.push(addressObj); 
  },
   addStore: function(storeObj) {
    this.store.push(storeObj); 
  },

    
  // Take a customer id and spit their data out 
  outputCustomerById: function(customer_id) {

    for (var i = 0; i < allData.length; i++) {
      if(customer_id == allData[i].data.customer_id && allData[i].type=="customer") {
        console.log("Customer " + customer_id + ": " + allData[i].data.first_name + " " + 
                    allData[i].data.last_name + " (" +
                    allData[i].data.email + ")");
        CustomerDB.getAddressById(allData[i].data.address_id);
        var currentTime = new Date();
        console.log("Joined: " + currentTime);
        
      }
    }
  },
  getAddressById: function(address_id){
    for(var i= 0; i < allData.length; i++){
      if(address_id == allData[i].data.address_id && allData[i].type=="address"){
	   console.log("Home Address: " +allData[i].data.address +" "+allData[i].data.city+", "
                +allData[i].data.province+". "+allData[i].data.postal_code);
      }
    }    
  },
// This method takes no parameters and simply outputs all customer data
  outputAllCustomers: function() {
    console.log("All Customers\n\n");
    for(var i = 0; i < allData.length; i++) {
      if (allData[i].type == "customer") {
        console.log("Customer " + allData[i].data.customer_id + " " + allData[i].data.first_name + " " + 
        allData[i].data.last_name + " (" + allData[i].data.email + ") ");
        
        // Output house address corresponding to home address
        CustomerDB.getAddressById(allData[i].data.address_id);// Grabbing home address will also be handled by getAddressById
          var currentTime = new Date();
        console.log("Joined: " + currentTime+"\n\n");
        // Also do join date
      }
    }
  },

  
  // This method takes a store_id and outputs all of the customer data for the corresponding store_id from the "customers" array
  outputCustomersByStore: function(store_id) {
        for (var i = 0; i < allData.length; i++) {
          if(store_id == allData[i].data.store_id && allData[i].type=="store") {
            console.log('Customers in store ' + allData[i].data.name+"\n\n");
            }
           if(store_id == allData[i].data.store_id){
            CustomerDB.outputCustomerById(allData[i].data.customer_id);
           }
      }
    },
 removeCustomerById: function(customer_id) {
 for(var i=0;i<allData.length;i++){
     if(customer_id== allData[i].data.customer_id && allData[i].type=="customer"){
     var raddress = allData[i].data.address_id;
	   allData.splice(i,1);
	   this.removeAddressById(raddress);
       i--;
     }    
   }
 },
 removeAddressById: function(address_id){
	  var chk = false;
	 for (var i = 0; i<allData.length;i++){
		 if(allData[i].data.address_id == address_id){
		 
		 chk = true;
		 }
	 }
	 if(chk == false){
		for(var i =0; i<allData.length;i++){
			if(allData[i].data.address_id == address_id){
			chk = true;
			}
		}
	 }
	 if(chk == false){
		 for(var i = 0;i<allData[i].data.length;i++){
			 if(allData[i].data.address_id == address_id && allData[i].type=="address"){
				allData.splice(i,1);
				i--;				
			 }
		 }
	 }
 },
 
  
  // Take a number representing a customer_id and searches through the customers array
  // to remove the customer with the matching customer_id property
  // Also make sure that the corresponding address is removed from the addresses array
  // only if there are no customer or store objects still using it
 
    
  // Add addressObj to the addresses array if its type is address
  
  outputAllAddresses: function(){
	  console.log("All Addresses\n\n");
    for(var i = 0; i < allData.length; i++) {
      if (allData[i].type == "address") {
      
        CustomerDB.getAddressById(allData[i].data.address_id);
      }
    }
  },
 
 
  outputAllStores: function(){
	  console.log("All Stores\n\n");
    var add;
    for(var i = 0; i < allData.length; i++) {
    
      if(allData[i].type!="customer" ){
      add = allData[i].data.address_id;
      console.log("Store "+ allData[i].data.store_id + ": "+ allData[i].data.name +"\n");
      if(add==allData[i].data.address_id){
      console.log("Location: "+allData[i].data.address +" "+allData[i].data.city+", "+
                 allData[i].data.province+". "+allData[i].data.postal_code+"\n\n");
      }
      }
    }
  },
  getStoreById: function(store_id){
    for(var i=0;i<allData[i].length;i++){
    console.log("Store "+store_id+": "+allData[i].data.name);
    }
  },
  
};




/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/


// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

