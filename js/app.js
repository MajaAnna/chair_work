document.addEventListener('DOMContentLoaded', function(){

    /**navigation**/

   var listFirst = document.querySelector('.navigation > ol > li'),
       listSecond = document.querySelector('ul');

   listFirst.addEventListener('mouseover', function(){
      //listSecond.forEach(function(value){
       listSecond.style.display = 'block';
      //});
   });

   listFirst.addEventListener('mouseout', function(){
       listSecond.style.display = 'none';
   });

    /**bloki z obrazkami**/

    var textBlock = document.querySelectorAll('.overlay h3'),
        pictureTextBlock = document.querySelectorAll('.overlay img');

    pictureTextBlock.forEach(function(value){
       value.addEventListener('mouseover', function(){
           this.nextElementSibling.hidden = true;
       });
        value.addEventListener('mouseout', function(){
            this.nextElementSibling.hidden = false;
        });
    });

    /**slider**/
    var prev = document.querySelector('.slider_arrow1'),
        next = document.querySelector('.slider_arrow2'),
        sliderElem = document.querySelectorAll('.slider li'),
    counter = 0;

    sliderElem[counter].classList.add('visible');

    next.addEventListener('click', function(){
       sliderElem[counter].classList.remove('visible');
       counter++;
       if(counter === sliderElem.length){
            counter = 0;
       }
       sliderElem[counter].classList.add('visible');
    });
    prev.addEventListener('click', function(){
        sliderElem[counter].classList.remove('visible');
        counter--;
        if(counter < 0){
            counter = sliderElem.length-1;
        }
        sliderElem[counter].classList.add('visible');
    });

    /**calculator**/


});