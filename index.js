let heading = document.getElementsByClassName("according");

for(let i=0 ; i<heading.length ; i++ ){
  heading[i].addEventListener('click', function(){
    this.classList.toggle('active')
    var desc = this.nextElementSibling;
    if(desc.style.maxHeight){
      desc.style.maxHeight = null;
    }
    else{
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  })
}