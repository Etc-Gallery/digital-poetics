$(document).ready(function () {


  var deactivatePersistMenu = function (e) {
    var button = $('.persist button.active')
    button.removeClass('active');
    button.on('click', activatePersistMenu);
    $('.' + button.data('dropdown')).removeClass('active');
    $('body').off('click', deactivatePersistMenu);
  }
  var activatePersistMenu = function (e) {
    $(this).addClass('active');
    $('.' + $(this).data('dropdown')).addClass('active');
    e.stopPropagation();
    $(this).off('click', activatePersistMenu);
    $('body').on('click', deactivatePersistMenu);
  };
  $('.persist button').on('click', activatePersistMenu);

  $('li.about').on('click', function (e) {
    $('.about-overlay').addClass('active');
    $('.overlays').addClass('active');
  })

  $('.overlays .x').on('click', function (e) {
    $('.about-overlay').removeClass('active');
    $('.overlays').removeClass('active');
  });


  var sizeHeader = function () {
    $('.page-header').height($(window).height());
  };
  $(window).on('resize', sizeHeader);

  var scrollHandler = function () {
    var st = $('.page').scrollTop();
    var scale = d3.scale.linear().domain([0,960]).range([1,0]);
    $('.page-header').css('opacity', scale(st));
    if (st > 200 && !$('.persist .title').hasClass('active')) {
      $('.persist .title').addClass('active');
    } else if (st <= 200 && $('.persist .title').hasClass('active')) {
      $('.persist .title').removeClass('active');
    }
  };
  $('.page').on('scroll', _.throttle(scrollHandler, 100));


  var buttonClickHandler = function () {
    $('.page').scrollTop(320);
  };
  $('button').on('click', scrollHandler);

  sizeHeader();


});