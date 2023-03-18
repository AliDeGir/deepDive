$(document).ready(function () {
    var small={width: "20vw",height: "40vh"};
    var large={width: "40vw",height: "80vh"};
    var count=1; 
    $("#imgtab").css(small).on('click',function () { 
        $(this).animate((count==1)?large:small);
        count = 1-count;
    });
});