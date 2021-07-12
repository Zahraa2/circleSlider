const circles = document.querySelectorAll('.circle') ; 
const next = document.getElementById("next") ; 
const prev = document.getElementById("prev") ; 
const progress = document.getElementById('progress') ; 
const currentImg = document.getElementById('currentImg') ;
const images = ['img/1.jpg' , 'img/2.jpg' , 'img/3.jpg' , 'img/4.jpg']
var CurrentActive = 1 , imgIndex = 0; 
currentImg.src = images[0]; 
next.addEventListener('click' , () => {
  CurrentActive++ ;
  imgIndex++ ; 
  if (imgIndex > 3 ) {
    imgIndex = 3 ;
  }
  currentImg.src = images[imgIndex];  


  // set current Active = 4 
  if (CurrentActive > 4 ) {
     CurrentActive = 4 ; 
  }
  update();  

   
})

prev.addEventListener('click' , () => {
  CurrentActive-- ; 
  imgIndex-- ; 
  if (imgIndex < 0  ) {
    imgIndex = 0 ;
  }
  currentImg.src = images[imgIndex]; 
  // set current Active = 1 
  if (CurrentActive < 1 ) {
     CurrentActive = 1 ; 
  }
  update() ;
})

function update() { 

  
  circles.forEach((circle , index) => {

    if (index < CurrentActive) { 
      circle.classList.add('active') ; 
    } else { 
      circle.classList.remove('active') ;
    }
  })

  const actives = document.querySelectorAll('.active') ; 

  // width >> (actives.length - 1) / (circles.length - 1 ) * 100

  progress.style.width = ((actives.length - 1) / (circles.length - 1 )) * 100 + '%' ;

  if (CurrentActive === 1 ) { 
    prev.disabled = true ;
  } 
  else if (CurrentActive === circles.length) {
    next.disabled = true ;
  }
  else {
    prev.disabled = false ; 
    next.disabled = false ; 
  }


}