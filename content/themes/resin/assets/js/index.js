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
        $('#search-drawer').addClass('open')
      })

      $('#search-close').click(function() {
        $('#search-drawer').removeClass('open')
      })

      $("#search-field").ghostHunter({
        results         : "#search-results",
        info_template   : "<p>Number of posts found: {{amount}}</p>",
        onKeyUp         : true,
        // prefix relative link with /blog to respect subdir
        result_template : "<a class='search-result', href='/blog{{link}}'><h5>{{title}}</h5><p>{{pubDate}}</p></a></hr>",
        before          : function(){
          $('#search-loading').show()
        },
        onComplete      : function(){
          $('#search-loading').hide()
        }
      });
    });

}(jQuery));
