document.addEventListener('DOMContentLoaded',function(){
       document.querySelector("#btn").addEventListener('click',function(){ 
        let text =document.querySelector("#texto").value ;
         document.querySelector("#result").innerHTML= upper(text);
        })
  
        function upper(text){
            
            chrome.tabs.getSelected(null,function(tab) {
                var tablink = tab.url;
                document.querySelector("#result").innerHTML=tablink;
            });
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
                .then(json =>  document.querySelector("#result1").innerHTML=JSON.stringify(json))
      
  }       


})

