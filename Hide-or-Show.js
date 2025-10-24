// $(document).ready(function() {
    // hide by clicking on element
//     $("p").click(function(){
//         $(this).hide("slow")
//     });
// });


    // hide element by clicking on a button 
    $(".hide-paras").click(function(){
        $("p").hide(150);
    });

    // effect on square element
    $('div').css({
        "background-color" : "deepskyblue",
        "padding" : "50px",
        "margin-right" : "80px",
        "font-size" : "50px"
    });
        
    
    $('#demo').click(function() {
        $(this).hide("slow")
    });


    // Using toggle method with callback example
    function changeText() {
        document.getElementById("btn").innerText = "Show p1";
    };
    $("#btn").click(function() {
        $('.p2').toggle(300,changeText())
    })
    