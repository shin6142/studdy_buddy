$(function() {


  $('#GetInTouch-show').click(function() {
    $('#GetInTouch-modal').fadeIn();
  });
  $('#GetInTouch-form-close').click(function() {
    $('#GetInTouch-modal').fadeOut();
  });

  $('#menu-show').click(function(){
    var $menu = $('.menu-bar-list');
    if($menu.hasClass('open')){
      $menu.removeClass('open');
      $menu.slideUp();

    }else{
      $menu.addClass('open');
        $menu.slideDown();
      }
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$('.talk-btn').click(function(){
  var $menu = $(this).find('.talk-sum');
  if($menu.hasClass('open')){
    $menu.removeClass('open');
    $menu.slideUp();
    $(this).find('h3').text('See More');
    $(this).find('i').addClass('fa-sort-down');

  }else{
    $menu.addClass('open');
      $menu.slideDown();
      $(this).find('h3').text('Close');
      $(this).find('i').removeClass('fa-sort-down');
      $(this).find('i').addClass('fa-caret-up');

    }
});





});
