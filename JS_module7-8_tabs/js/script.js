$(function() {
 var $tabs = $('ul.tabs__menu li');
 
 $tabs.on('click', function() {
  var $clickedTab = $(this);
  var $contentId = $clickedTab.attr('data-id');
  console.log($contentId);
  
  $tabs.removeClass('active');
  $clickedTab.addClass('active');

  $('#' + $contentId).addClass('active');
  $('#' + $contentId).siblings().removeClass('active')
    })
})