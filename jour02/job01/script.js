
document.addEventListener('DOMContentLoaded', function() {
  
    const btn = document.querySelector("#button");
    
    function citation() {
        const citation = document.querySelector("#citation").innerHTML;
        console.log(citation);        
    }

    btn.addEventListener("click", citation);




})