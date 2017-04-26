// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};
window.onload = function(){
     var audi=document.querySelector("#MyAudio");
     var aStr="";
        for(var i=0; i < audio.source.length; i++){ 
              aStr+="<br/><br/><br/><audio id='Audio1"+i+"' controls>";

				
        aStr+= "<source src='"+audio.source[i].src+"'"+"type='"+audio.source[i].type+"'/>";
        aStr+= "</audio><br/><br/><br/>";
    }
  
              audi.innerHTML += aStr;
};