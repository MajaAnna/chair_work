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


    /**CALCULATOR**/


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
    var panelLeft = document.querySelector('.panel_left'),
        panelRight = document.querySelector('.panel_right'),
        sum = document.querySelector('.sum strong');

    function summary() {
        var finalSum = 0;
        for (var i = 0; i < panelRight.children.length; i++) {
            if(panelRight.children[i].textContent != ''){
                finalSum += Number(panelRight.children[i].textContent);
            }
        }
        sum.innerText = finalSum + 'zł';
    }

    var listItemsName = document.querySelectorAll('.name li'),
        listItemsFabric = document.querySelectorAll('.fabric li'),
        listItemsChairsColors = document.querySelectorAll('.chairsColors li'),
        transport = document.querySelector('#transport'),

        //panel left
        chairTitle = panelLeft.querySelector('h4'),
        chairColor = panelLeft.querySelector('.color'),
        chairPattern = panelLeft.querySelector('.pattern'),
        chairTransport = panelLeft.querySelector('.transport'),

        //panel right
        chairTitleValue = panelRight.querySelector('h4'),
        chairColorValue = panelRight.querySelector('.color'),
        chairPatternValue = panelRight.querySelector('.pattern'),
        chairTransportValue = panelRight.querySelector('.transport');

    /**
     * price for model
     */
    listItemsName.forEach(function(value){
       value.addEventListener('click', function(){
           chairTitle.innerText = this.innerText;
           var value1 = parseInt(this.dataset.price);
           chairTitleValue.innerText = value1;
           summary();
       });

    });

    /**
     * price for fabric
     */
    listItemsFabric.forEach(function(value){
        value.addEventListener('click', function(){
            chairPattern.innerText = this.innerText;
            var value2 = parseInt(this.dataset.price);
            chairPatternValue.innerText = value2;
            summary();
        });

    });

    /**
     * price for color
     */
    listItemsChairsColors.forEach(function(value){
        value.addEventListener('click', function(){
            chairColor.innerText = this.innerText;
            var value3 = parseInt(this.dataset.price);
            chairColorValue.innerText = value3;
            summary();
        });

    });

    /**
     * price for transport
     */
    transport.addEventListener('change', function(){
        if(transport.checked){
            chairTransport.innerText = "Transport";
            var value4 = parseInt(this.dataset.transportPrice);
            chairTransportValue.innerText = value4;
        } else {
            chairTransport.innerText = "";
            value4 = "";
            chairTransportValue.innerText = value4;
        }
        summary();
    });

});