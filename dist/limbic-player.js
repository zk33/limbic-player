/*! Limbic Player - v0.1.0 - 2013-12-24
* https://github.com/zk33/limbic-player
* Copyright (c) 2013 zk33; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.limbic_player = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.limbic_player = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.limbic_player.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.limbic_player.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].limbic_player = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
