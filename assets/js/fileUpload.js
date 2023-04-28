// UPLOAD IMAGES
const imagesBinds = [["userImg-1", document.getElementById("uploadImg-1"), document.getElementById("removeImg-1")],
["userImg-2", document.getElementById("uploadImg-2"), document.getElementById("removeImg-2")],
["userImg-3", document.getElementById("uploadImg-3"), document.getElementById("removeImg-3")],
["userImg-4", document.getElementById("uploadImg-4"), document.getElementById("removeImg-4")],
["userImg-5", document.getElementById("uploadImg-5"), document.getElementById("removeImg-5")]]

function displayImage(imgTagName, imgFile) {
    imgTag = document.getElementById(imgTagName);
    // Here we need to create an URL based on the file Object imgFile, 
    // otherwise it would give us error
    imgTag.src = URL.createObjectURL(imgFile);
}

function deleteImg(imgTagName) {
    imgTag = document.getElementById(imgTagName);
    imgTag.src = "http://via.placeholder.com/190x180"
}

imagesBinds.forEach(imgObj => {
    // add an event listener to each img input when the event of uploading 
    // img is happening
    imgObj[2].addEventListener("click", function () {
        deleteImg(imgObj[0]);
    }, false);

    imgObj[1].addEventListener("change", function () {
        const imgFile = imgObj[1].files[0];
        // console.log(imgFile);
        displayImage(imgObj[0], imgFile)
    }, false);
})

//DELETE IMAGES
