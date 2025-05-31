$(document).ready(function() {
    let currentIndex = 0;
    let images = $(".slider img");
    let totalImages = images.length;

    function showImage(index) {
        $(".slider").css("transform", "translateX(-" + (100 * index) + "vw)");
    }

    $(".prev-btn").click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });
    
    $(".next-btn").click(function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });
});
