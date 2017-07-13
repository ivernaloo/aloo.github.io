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

    var IMGS = $('img[update="refresh"]');

    function updateImage() {
        IMGS.each(function(i, item){
            item.src = item.src.split("?")[0] + "?" + new Date().getTime();
            console.log("update")
            
        });
    }

    setInterval(updateImage, 60000);

    console.log("Hello! new world!");
    console.log("This is a entry for Scrape!")
});
