var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)
window.onload = function() {
  filterAllPets();
}
function myDisplay(chk){
    var myDiv = document.querySelector("#main-table-body");
    myDiv.innerHTML="";
    var i;
    for(i=0;i<petData.length;i++){
            if(chk == 0 && filterType == ""){
                var trow = document.createElement('tr');
                var tdiv = document.createElement('td');
                var myImg = document.createElement('img');
                myImg.setAttribute("src", petData[i].image.src);
                myImg.setAttribute("width",petData[i].image.width);
                myImg.setAttribute("height",petData[i].image.height);
                myImg.setAttribute("alt",petData[i].image.alt);
                tdiv.appendChild(myImg);
                trow.appendChild(tdiv);
                var tdiv1 = document.createElement('td');
                trow.appendChild(tdiv1);
                var myh5 = document.createElement('h5');
                tdiv1.appendChild(myh5);
                var mytxtnode = document.createTextNode(""+petData[i].name+"");
                myh5.appendChild(mytxtnode);
                var myp = document.createElement('p');
                var mySpn = document.createElement('span');
                myp.innerHTML = petData[i].description;
                tdiv1.appendChild(myp);
                var mytxtnode2 = document.createTextNode("Age: " + petData[i].age + " year old.");
                mySpn.appendChild(mytxtnode2);
                tdiv1.appendChild(mySpn);
                myDiv.appendChild(trow);    
            }
            else if(filterType==petData[i].type && chk == 1){
                var trow = document.createElement('tr');
                var tdiv = document.createElement('td');
                var myImg = document.createElement('img');
                myImg.setAttribute("src", petData[i].image.src);
                myImg.setAttribute("width",petData[i].image.width);
                myImg.setAttribute("height",petData[i].image.height);
                myImg.setAttribute("alt",petData[i].image.alt);
                tdiv.appendChild(myImg);
                trow.appendChild(tdiv);
                var tdiv1 = document.createElement('td');
                trow.appendChild(tdiv1);
                var myh5 = document.createElement('h5');
                tdiv1.appendChild(myh5);
                var mytxtnode = document.createTextNode(""+petData[i].name+"");
                myh5.appendChild(mytxtnode);
                var myp = document.createElement('p');
                var mySpn = document.createElement('span');
                myp.innerHTML = petData[i].description;
                tdiv1.appendChild(myp);
                var mytxtnode2 = document.createTextNode("Age: " + petData[i].age + " year old.");
                mySpn.appendChild(mytxtnode2);
                tdiv1.appendChild(mySpn);
                myDiv.appendChild(trow);
            }   
            else if (chk == 2 && petData[i].age>= filterAgeMin
            && petData[i].age<=filterAgeMax && filterType == petData[i].type){
                var trow = document.createElement('tr');
                var tdiv = document.createElement('td');
                var myImg = document.createElement('img');
                myImg.setAttribute("src", petData[i].image.src);
                myImg.setAttribute("width",petData[i].image.width);
                myImg.setAttribute("height",petData[i].image.height);
                myImg.setAttribute("alt",petData[i].image.alt);
                tdiv.appendChild(myImg);
                trow.appendChild(tdiv);
                var tdiv1 = document.createElement('td');
                trow.appendChild(tdiv1);
                var myh5 = document.createElement('h5');
                tdiv1.appendChild(myh5);
                var mytxtnode = document.createTextNode(""+petData[i].name+"");
                myh5.appendChild(mytxtnode);
                var myp = document.createElement('p');
                var mySpn = document.createElement('span');
                myp.innerHTML = petData[i].description;
                tdiv1.appendChild(myp);
                var mytxtnode2 = document.createTextNode("Age: " + petData[i].age + " year old.");
                mySpn.appendChild(mytxtnode2);
                tdiv1.appendChild(mySpn);
                myDiv.appendChild(trow);
            }
            else if (chk == 2 && petData[i].age>= filterAgeMin
            && petData[i].age<=filterAgeMax && filterType == ""){ 
                var trow = document.createElement('tr');
                var tdiv = document.createElement('td');
                var myImg = document.createElement('img');
                myImg.setAttribute("src", petData[i].image.src);
                myImg.setAttribute("width",petData[i].image.width);
                myImg.setAttribute("height",petData[i].image.height);
                myImg.setAttribute("alt",petData[i].image.alt);
                tdiv.appendChild(myImg);
                trow.appendChild(tdiv);
                var tdiv1 = document.createElement('td');
                trow.appendChild(tdiv1);
                var myh5 = document.createElement('h5');
                tdiv1.appendChild(myh5);
                var mytxtnode = document.createTextNode(""+petData[i].name+"");
                myh5.appendChild(mytxtnode);
                var myp = document.createElement('p');
                var mySpn = document.createElement('span');
                myp.innerHTML = petData[i].description;
                tdiv1.appendChild(myp);
                var mytxtnode2 = document.createTextNode("Age: " + petData[i].age + " year old.");
                mySpn.appendChild(mytxtnode2);
                tdiv1.appendChild(mySpn);
                myDiv.appendChild(trow);
                }
    }
}
function filterAllPets(){
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    myDisplay(0);
}
function filterDog(){
    filterType = "dog";
    myDisplay(1);
}
function filterBird(){
    filterType = "bird";
    myDisplay(1);
}
function filterCat(){
    filterType = "cat";
    myDisplay(1);
}
function filter_zero_1(){
    filterAgeMin = 0;
    filterAgeMax = 1;
    myDisplay(2);
}
function filter_1_3(){
    filterAgeMin = 1;
    filterAgeMax = 3;
    myDisplay(2);
}
function filter_4_plus(){
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    myDisplay(2);
}