/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function() {

      $('.menu-btn').click (function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
      });

      $('#search-open').click(function() {
        $('.search-drawer').addClass('open')
      })

      $('#search-close').click(function() {
        $('.search-drawer').removeClass('open')
      })

      $("#search-field").ghostHunter({
        results         : "#search-results",
        info_template   : "<p>Number of posts found: {{amount}}</p>",
        result_template : "<a class='search-result' href='{{link}}'><h5>{{title}}</h5><p>{{pubDate}}</p></a>",
        before          : function(){
          $('.search-loading').show()
        },
        onComplete      : function(){
          $('.search-loading').hide()
        }
      });
    });

}(jQuery));
