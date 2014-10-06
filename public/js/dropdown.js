var ETCDropdown = function (options) {
  var markup = '' +
    '<div class="etc-gear-wrapper">' +
      '<button class="etc-gear">' + 
        '<svg width="100%" y="100%" viewBox="0 0 200 200">' +
        '<path d="M99.7,200c-6.9,0-13.6-20.9-20-22.5c-7.2-1.9-14-4.7-20.3-8.4c-5.9-3.5-25.4,6.5-30.1,1.7c-4.7-4.7,5.2-24.2,1.8-30' +
          'c-3.8-6.4-6.7-13.3-8.6-20.7C20.8,113.6,0,106.9,0,100c0-6.9,20.8-13.7,22.5-20.1c1.9-7.2,4.7-14.1,8.4-20.4' +
          'c3.5-5.9-6.5-25.4-1.7-30.2c4.7-4.7,24,5.4,29.7,2c6.4-3.8,13.4-6.8,20.8-8.7C86.1,20.9,92.8,0,99.7,0c6.9,0,13.5,20.9,19.9,22.5' +
          'c7.4,1.9,14.5,4.9,20.9,8.7c5.7,3.4,25-6.6,29.7-2c4.8,4.8-5.1,24.3-1.7,30.2c3.7,6.3,6.6,13.2,8.4,20.5c1.6,6.4,22.4,13.1,22.4,20' +
          'c0,6.9-20.8,13.5-22.4,19.9c-1.9,7.3-4.8,14.3-8.5,20.6c-3.4,5.9,6.5,25.4,1.7,30.2c-4.8,4.8-24.3-5.1-30.1-1.7' +
          'c-6.3,3.7-13.1,6.6-20.3,8.4C113.3,179.1,106.6,200,99.7,200z M139.5,100c0-22.1-17.8-40-39.9-40s-39.9,17.9-39.9,40' +
          's17.8,40,39.9,40S139.5,122.1,139.5,100z"/>' +
        '</svg>' +
      '</button>' +
      '<div class="etc-dropdown-marker"></div>' +
    '</div>' +
    '<ul class="etc-gear-dropdown">' +
      '<li class="etc-title">' + options.title + '</li>' +
      '<li class="etc-byline">by ' + options.byline + '</li>' +
      '<li class="etc-overlay-button etc-link">read the statement</li>' +
      '<li class="etc-digital-poetics etc-link"><a href="/">digital poetics</a></li>' +
      '<li class="etc-home etc-link"><a href="http://etc-gallery.com">Etc. Gallery</a></li>' +
    '</ul>' +
    '<div class="etc-overlay">' +
      options.statement +
      '<svg width="100px" height="100px" viewBox="0 0 200 200" class="etc-x">' +
        '<line fill="none" stroke="#FFFFFF" stroke-miterlimit="10" x1="0" y1="200" x2="200" y2="0"/>' +
        '<line fill="none" stroke="#FFFFFF" stroke-miterlimit="10" x1="200" y1="200" x2="0" y2="0"/>' +
      '</svg>' +
    '</div>';

  document.getElementsByTagName('body')[0].innerHTML += markup;
  var gear = document.getElementsByClassName('etc-gear-wrapper')[0];
  var dropdown = document.getElementsByClassName('etc-gear-dropdown')[0];
  var overlayButton = document.getElementsByClassName('etc-overlay-button')[0];
  var overlay = document.getElementsByClassName('etc-overlay')[0];
  var x = document.getElementsByClassName('etc-x')[0];
  x.addEventListener('click', function (e) {
    overlay.classList.remove('active');
    overlay.style.top = (-window.innerHeight) + 'px';
  }, false);
  gear.addEventListener('click', function (e) {
    gear.classList.contains('active') ? gear.classList.remove('active') : gear.classList.add('active');
    dropdown.classList.contains('active') ? dropdown.classList.remove('active') : dropdown.classList.add('active');
  }, false);
  overlayButton.addEventListener('click', function (e) {
    gear.classList.remove('active');
    dropdown.classList.remove('active');
    if (overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      overlay.style.top = (-window.innerHeight) + 'px';
    } else {
      overlay.classList.add('active');
      overlay.style.top = 0;
    }
  });

  var sizeOverlay = function () {
    overlay.style.width = window.innerWidth + 'px';
    overlay.style.height = window.innerHeight + 'px';
    overlay.style.top = (-window.innerHeight) + 'px';
  };
  sizeOverlay();

  window.addEventListener('resize', function (e) {
    sizeOverlay();
  }, false);

};




