$(function(){
    $('#image-con').lightGallery({
        thumbnail:true
    });

// store the currently selected tab in the hash value
    $("ul.nav-tabs > li > a").on("shown.bs.tab", function(e) {

        var id = $(e.target).attr("href").substr(1);
        window.location.hash = id;
    });

// on load of the page: switch to the currently selected tab
    var hash = window.location.hash;
    $('.nav-tabs a[href="' + hash + '"]').tab('show');
});
