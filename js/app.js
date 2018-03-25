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


    /**toggle lists**/
    var listArrow = document.querySelectorAll('.list_arrow'),
        listPanel = document.querySelectorAll('.drop_down_list ul');

    listPanel.forEach(function(value){
        value.hidden = true;
    });

    listArrow.forEach(function(value){
        value.addEventListener('click', function(){
            this.nextElementSibling.hidden = !this.nextElementSibling.hidden;
        });
    });

    /**summary**/
    var listItemsName = document.querySelectorAll('.name li'),
        listItemsFabric = document.querySelectorAll('.fabric li'),
        listItemsChairsColors = document.querySelectorAll('.chairsColors li'),
        panelLeft = document.querySelector('.panel_left'),
        panelRight = document.querySelector('.panel_right'),
        sum = document.querySelector('.sum > strong');

    listItemsName.forEach(function(value){
       value.addEventListener('click', function(){

       });
    });


    console.log(listItems);
    console.log(panelLeft);
    console.log(panelRight);
    console.log(sum);

});