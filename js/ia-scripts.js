$(document).ready(function()
{
  //alert('scripts');  
  $('.menu-open').click(function()
  { 
    $('#mobile-navigation').css(
    {
      'width':'100%',
      'visibility':'visible',
      'opacity':'1'
    }); 
    $('body').css({'overflow':'hidden'});
  });
  $('.menu-close').click(function()
  { 
    $('#mobile-navigation').css(
    {
      'width':'0',
      'visibility':'hidden',
      'opacity':'0'
    }); 
    $('body').css({'overflow':'auto'});
  });
//////////////////////////////////////    
  $('.picfocus').click(function()
  {
    var picSelected = $(this).attr('src');
    var picTitle = $(this).attr('alt');
    $('.light-box').html(
        '<img ondragstart="return false;" src="'+ picSelected +'" clss="image"/> <p class="title-output">'+ picTitle +'</p>');
    //$('.light-box').html('<p class="title-output">'+ picTitle +'</p>');
    $('#img-view').fadeIn(200);
    $('body').css({'overflow':'hidden'});
  });    
    
  $('#img-view').click(function()
  {
    $('#img-view').fadeOut(200); 
    $('body').css({'overflow':'auto'});
  });

});
