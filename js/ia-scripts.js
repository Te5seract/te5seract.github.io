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
/////////////////////////////////////
    
  $('.icon-focus').click(function()
  {
    var iconSelected = $(this).attr('src');
    var iconTitle = $(this).attr('alt');
    $('.icon-info-box').html('<div class="icon-info-box"><span class="iacon-close ia-cross"></span><span class="iacon-infobox-left-title">Iacons</span><div class="icon-title"><span class="'+ iconSelected +'"></span> <h3>'+ iconTitle +'</h3></div><div class="input-container"> <textbox>&lt;span class="'+ iconSelected +'"&gt;&lt;/span&gt;</textbox></div></div>');
      
    $('#iacon-link-canvas').fadeIn(200);
      
    $('.iacon-close').click(function()
    {
      $('#iacon-link-canvas').fadeOut(200); 
    });    
      
  });     
    
    
});
