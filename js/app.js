document.addEventListener("DOMContentLoaded", function() {


    var $myContainer = $('.container');
    var $boxInfo = $myContainer.find('.boxInfo');
    var $form = $boxInfo.find('form');
    var $error = $boxInfo.find('.error');
    var $surName = $form.find('#surName');
    var $codePhone = $form.find('#codePhone');
    var $mobile = $form.find('#mobile');
    var $options = $form.find('.options');
    var $genders = $form.find('.gender');
    var $day = $form.find('#day');
    var $month = $form.find('#month');
    var $year = $form.find('#year');
    var $submit = $form.find([type="submit"]);

    var $formContakt = $form.find('.formContakt');

    // fomkontakt
    $formContakt.on('focus', function(e) {
        e.preventDefault();
        $(this).addClass('formContaktActive');
    });
    $formContakt.on('blur', function(e) {
        e.preventDefault();
        $(this).removeClass('formContaktActive');
    });

    $day.on('focus', function(e) {
        e.preventDefault();
        $(this).addClass('dataFormActive');
    });
    $day.on('blur', function(e) {
        e.preventDefault();
        $(this).removeClass('dataFormActive');
    });

    $month.on('focus', function(e) {
        e.preventDefault();
        $(this).addClass('dataFormActive');
    });
    $month.on('blur', function(e) {
        e.preventDefault();
        $(this).removeClass('dataFormActive');
    });

    $year.on('focus', function(e) {
        e.preventDefault();
        $(this).addClass('dataFormActive');
    });
    $year.on('blur', function(e) {
        e.preventDefault();
        $(this).removeClass('dataFormActive');
    });

    var $img1 = $options.find('#img1');
    var $img2 = $options.find('#img2');
    

    $('input[name=gender]').click(function(){
        if($(this).attr("value")=="female"){
            $img1.addClass('activeFrame');
            $img2.removeClass('activeFrame');
        }
        if($(this).attr("value")=="male"){
            $img2.addClass('activeFrame');
            $img1.removeClass('activeFrame');

        }        
    });
$('input[name=gender]:checked').trigger('click');


    $form.on('submit', $submit, function(e) {
        e.preventDefault();


        var $surNameValue = $surName.val();
        var $mobileValue = $mobile.val();
        var $dayValue = $day.val();
        var $monthValue = $month.val();
        var $yearValue = $year.val();


        var mobileReg = /\d{3}[\-\]\d{3}[\-]\d{3}/;
        var dayReg = /^(0[0-9]|[12]\d|3[0-1])$/;
        var monthReg = /January|February|March|April|May|June|July|August|September|October|November|December|january|february|march|april|may|june|july|august|september|october|november|december/;
        var monthNumberReg = /^(0[0-9]|1[0-2])$/;
        var yearReg = /^(19\d{2}|201[0-3])$/;

        var inputMsg = new Array("Wrong Name.", "Wrong number. 000-000-000.", "Wrong day.", "Wrong month.", "Wrong year.", "Check the gender")

        var isError = false;
        var errorMsg = '';



        if ($surNameValue.length > 2) {
        } else {
            errorMsg += inputMsg[0] + '  ';
            isError = true;
        }

        if (mobileReg.test($mobileValue) || 0) {
        } else {
            errorMsg += inputMsg[1] + '  ';
            isError = true;
        }

        if (dayReg.test($dayValue) || 0) {
        } else {
            errorMsg += inputMsg[2] + '  ';
            isError = true;
        }

        if ($(window).innerWidth() >= 550) {
            if (monthReg.test($monthValue) || 0) {
            } else {
                errorMsg += inputMsg[3] + '  ';
                isError = true;
            }
        } else if (($(window).innerWidth() <= 551)) {
            if (monthNumberReg.test($monthValue) || 0) {
            } else {
                errorMsg += inputMsg[3] + '  ';
                isError = true;
            }
        }
/*
        if (monthReg.test($monthValue) || 0) {
        } else {
            errorMsg += inputMsg[3] + '  ';
            isError = true;
        }
*/

        if (yearReg.test($yearValue) || 0) {
        } else {
            errorMsg += inputMsg[4] + '  ';
            isError = true;
        }

        if ($('input[name=gender]:checked').val()) {
        } else {   
            errorMsg += inputMsg[5] + '  ';
            isError = true;
        } 

        if(isError) {
            $error.html(errorMsg);
            return false;
        } else {
            $error.html('');
            return true;
        } 


    });

});
 
   

           

