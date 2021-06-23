///this function checks whether the scrolled amount is more than 60 (the size of the navigation bar) if it is it sets the color of the nav bar to white
$(window).scroll(function() {
    if($(window).scrollTop() >= 60){
        $(".navbar").css("background-color","white");
    }else{
        $(".navbar").css("background-color","#ECECEC");
    }
});
//this function gets called when the document is loaded which listens for clicks on the cards and changes the text in the modal accordingly
$(document).ready(function(){
    $(".mycard").click(function(){
        switch($(this).find(".cardname").text()){
            case "StopTap":
                $("#modaltitle").text("StopTap");
                $("#modalcontent").text("A fun game I developed that provides rich gameplay where you have to tap the screen as a small box that moves at random times intersects with the big one. The game also offers a shop where you can utilize coins that you get by playing the game to customize the appearance of the boxes. It also offers a night mode. This game has reached the top 100 games list in the Jordanian App Store.");
                $("#modalimg1").attr("src","imgs/StopTap/1.png");
                $("#modalimg2").attr("src","imgs/StopTap/2.png");
                $("#modalimg3").attr("src","imgs/StopTap/3.png");
            break;
            case "GJU App":
                $("#modaltitle").text("GJU App");
                $("#modalcontent").text("An unofficial app for the university website created for the purpose of learning html web scraping and the basics of visual design and development on iOS using Xcode. It has many of the features available on the website plus course filtering capabilities and the ability to mark which courses have already been taken. Currently the app is in development only for iOS but an android version will be developed soon.");
                $("#modalimg1").attr("src","imgs/GJU/1.png");
                $("#modalimg2").attr("src","imgs/GJU/2.png");
                $("#modalimg3").attr("src","imgs/GJU/3.png");
            break;
            case "Arab Dono":
                $("#modaltitle").text("Arab Dono");
                $("#modalcontent").text("An iOS App that is connected to an online Back4APP Database (reading, writing, and retrieving).I had to create needy person profiles, define categories of donators, create, manage and update donated quantity items, linking offers to demands, sending and receiving confirmation emails, and publishing the application.");
                $("#modalimg1").attr("src","imgs/D&C/1.png");
                $("#modalimg2").attr("src","imgs/D&C/2.png");
                $("#modalimg3").attr("src","imgs/D&C/3.png");
            break;
            case "Image Upscale":
                $("#modaltitle").text("Image Upscale");
                $("#modalcontent").text("A course project where I had to implement 5 different image upscaling algorithms including nearest neighbor, bilinear and bicubic interpolation that works not only on a single core but also in parallel on the cpu and on the gpu on coda enables gpus. This project aims to increase the resolution of an image without sacrificing the quality of the image.");
                $("#modalimg1").attr("src","imgs/ImageUpscale/1.png");
                $("#modalimg2").attr("src","imgs/ImageUpscale/2.png");
                $("#modalimg3").attr("src","imgs/ImageUpscale/3.png");
            break;
            case "Library Management System":
                $("#modaltitle").text("Library Management System");
                $("#modalcontent").text("A windows program that has a wide range of features to manage a library from saving members records and books information in a database to filtering capabilities based on name, registration date it also can generate	 detailed reports of the members and their rented books as a xlsx file.");
                $("#modalimg1").attr("src","imgs/LMS/1.png");
                $("#modalimg2").attr("src","imgs/LMS/2.png");
                $("#modalimg3").attr("src","imgs/LMS/3.png");
            break;
        }
        $("#exampleModalCenter").modal("show");
    });
});