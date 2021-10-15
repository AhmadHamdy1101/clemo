var mixer = mixitup('.gallery');
    
// Adjust Shuffle Links

$('.shuffle li').click(function () {
   
    $(this).addClass('selected').siblings().removeClass('selected');
    
});