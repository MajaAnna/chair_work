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
    var dropDownList = document.querySelectorAll('.drop_down_list ul'),
        panelLeft = document.querySelector('.panel_left'),
        panelLeftChildren = panelLeft.children,
        panelRight = document.querySelector('.panel_right'),
        panelRightChildren = panelRight.children,
        sum = document.querySelector('.sum');

    sum.innerText = 0;

    function summary() {
        for (var i = 0; i < panelRightChildren.length; i++) {
            sum.innerText = 0;
            if (parseInt(panelRightChildren[i].innerText)) {
                console.log('wartość');
                sum.innerText += parseInt(panelRightChildren[i].innerText);
            } else {
                console.log('zero');
                sum.innerText = 0;
            }
        }
    }

    var listItemsName = document.querySelectorAll('.name li'),
        listItemsFabric = document.querySelectorAll('.fabric li'),
        listItemsChairsColors = document.querySelectorAll('.chairsColors li'),
        transport = document.querySelector('#transport'),

        //panel left
        //panelLeft = document.querySelector('.panel_left'),
        chairTitle = panelLeft.querySelector('h4'),
        chairColor = panelLeft.querySelector('.color'),
        chairPattern = panelLeft.querySelector('.pattern'),
        chairTransport = panelLeft.querySelector('.transport'),

        //panel right
        //panelRight = document.querySelector('.panel_right'),
        chairTitleValue = panelRight.querySelector('h4'),
        chairColorValue = panelRight.querySelector('.color'),
        chairPatternValue = panelRight.querySelector('.pattern'),
        chairTransportValue = panelRight.querySelector('.transport');

    listItemsName.forEach(function(value){
       value.addEventListener('click', function(){
           chairTitle.innerText = this.innerText;
           var value1 = parseInt(this.dataset.price);
           chairTitleValue.innerText = value1;
           //sum = parseInt(this.dataset.price);
       });
    });

    listItemsFabric.forEach(function(value){
        value.addEventListener('click', function(){
            chairPattern.innerText = this.innerText;
            var value2 = parseInt(this.dataset.price);
            chairPatternValue.innerText = value2;
        });
    });

    listItemsChairsColors.forEach(function(value){
        value.addEventListener('click', function(){
            chairColor.innerText = this.innerText;
            var value3 = parseInt(this.dataset.price);
            chairColorValue.innerText = value3;
        });
    });

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
    });



    summary();

    // function prizing(){
    //         for(var i = 0; i < dropDownList.length; i++){
    //             for(var j = 0; j < dropDownList[i].children.length; j++){
    //                 dropDownList[i].children[j].addEventListener('click', function(){
    //                     var value = dropDownList[i].children[j].data.price;
    //                     for(var k = 0; k < panelRightChildren.length; k++){
    //                         panelRightChildren[k].innerText = value.innerText;
    //                     }
    //                 })
    //             }
    //
    //         }
    // }
    //
    // prizing();

    // panelLeftSpans.forEach(function(value){
    //     var price = Number(value.innerText);
    //     sum.innerText = price;
    // });


});