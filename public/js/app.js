$(document).ready(function () {

  var sizeHeader = function () {
    $('.page-header').height($(window).height());
  };
  $(window).on('resize', sizeHeader);

  var scrollHandler = function () {
    var st = $('.page').scrollTop();
    var scale = d3.scale.linear().domain([0,960]).range([1,0]);
    $('.page-header').css('opacity', scale(st));
  };
  $('.page').on('scroll', _.throttle(scrollHandler, 100));


  var buttonClickHandler = function () {
    $('.page').scrollTop(320);
  };
  $('button').on('click', scrollHandler);

  sizeHeader();


});