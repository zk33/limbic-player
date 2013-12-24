/*
 * limbic-player
 * https://github.com/zk33/limbic-player
 *
 * Copyright (c) 2013 zk33
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.limbicPlayer = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.limbicPlayer = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.limbic_player.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.limbicPlayer.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].limbicPlayer = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
