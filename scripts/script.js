document.addEventListener('DOMContentLoaded',function(){
    var btn = document.querySelector('.btn');
    const hell = document.getElementById('hello');
    var input = document.querySelector('.ip');
    var Auto = document.querySelector('.auto');
    var lang = document.querySelector('.lan');
    console.log(lang);

        btn.onclick = async () =>{
        var lan=lang.value;
         var res= sendDataToServer(input.value,lan.slice(0, 2));
         const message = await res; // Await the promise to get the resolved value
         console.log(`this is ${message['message']} and ${message['auto_lang']}`); 
         hell.textContent=message['message'];
         Auto.textContent=message['auto_lang'];
         console.log(ip.textContent);
      
    }



    
   

});
function resizeInput() {
    var input = document.querySelector('.ip');
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
    console.log(input.scrollHeight);
  }
  