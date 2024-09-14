document.addEventListener("DOMContentLoaded", () => {

    const images=document.querySelector("img");

    for (image of images){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=> response.jsom())
        .then(data {
            =>image.src = data.messages
            image.width = 100;
            images.height 100;
        })
    }

})