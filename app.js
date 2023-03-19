$(document).ready(function () {
    var small={width: "20vw",height: "30vh"};
    var large={width: "100vw",height: "100vh"};
    var count=1; 
    $("#imgtab").css(small).on('click',function () { 
        $(this).animate((count==1)?large:small);
        count = 1-count;
    });
});

$(document).ready(function() {
    $('a').click( function(e) {
        e.preventDefault();
        $("#hidden").show();
    });
    $('.close').click(function(){
        $("#hidden").hide();
    })
})