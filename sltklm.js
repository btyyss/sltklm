//For Demo only
var links = document.getElementsByClassName('link')
for(var i = 0; i <= links.length; i++)
   addClass(i)


function addClass(id){
   setTimeout(function(){
      if(id > 0) links[id-1].classList.remove('hover')
         links[id].classList.add('hover')
   }, id*550) 
}
//tarih
const event = new Date();

const options = { year: 'numeric', month: 'long', day: 'numeric' };

let text = event.toLocaleString('tr-TR', options);

document.getElementById("tarih").innerHTML = text; 