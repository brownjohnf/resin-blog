/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function() {
        // On the home page, move the blog icon inside the header
        // for better relative/absolute positioning.

        $('.menu-btn').click (function(){
          $(this).toggleClass('active');
          $('.nav').toggleClass('active')
        });
    });

}(jQuery));
