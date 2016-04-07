/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        // FitVid Video Width Target
        $.getScript("/assets/js/jquery.fitvids.js", function(){
            $(".post-content").fitVids();

        });

    });

}(jQuery));
