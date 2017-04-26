// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];
window.onload = function(){

    orderedlist();
    unorderedNestedlist();
    function orderedlist(){
//alert("Numner 1");
    var listContainer = document.querySelector("#MyOl");

         var myorListString = "<ol>";
                for(var i=0; i < fruits.length; i++){ 
                    myorListString += "<li>" + fruits[i] + "</li>"
                }
      myorListString += "</ol>"; 
      listContainer.innerHTML = myorListString;
      }
      function unorderedNestedlist(){
         // alert(directory[1].name);
          var ullistContainer = document.querySelector("#MyUl");
            var myulListString = "<ul>";
              for(var j=0; j < directory.length; j++){ 
            myulListString += "<li>" + directory[j].name + "</li>"
            if(directory[j].files){
                              myulListString += "<ul>";
                             // alert(j);
                                  for (var k=0; k < directory[j].files.length; k++){ 
                                     myulListString += "<li>" + directory[j].files[k].name + "</li>";
                                     }
                                myulListString += "</ul>"; 
                            }
        }
     myulListString += "</ul>"; 
      ullistContainer.innerHTML = myulListString;
      }
};
