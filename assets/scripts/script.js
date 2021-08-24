fetch("/ig_data.json")
.then(response => {
    return response.json();
})
.then(data => {
    var i;
    for (i = 0; i < data["hairbyami2021"].length; i++) {
        var a_tag = document.createElement("a");
        var img_link = document.createElement("img");
        a_tag.href = "https://www.instagram.com/p/" + data["hairbyami2021"][i]["shortcode"] + "/";
        img_link.src = data["hairbyami2021"][i]["display_url"];
        img_link.crossOrigin = ""
        a_tag.appendChild(img_link);
        document.getElementById("instagram").appendChild(a_tag);
    }
    
});


// function toggleFont() {
//     if (document.getElementById("font-test").style.fontFamily === "OleoScript-Regular") {
//         document.getElementById("font-test").style.fontFamily = "Courgette-Regular";
//     } else {
//         document.getElementById("font-test").style.fontFamily = "OleoScript-Regular";
//     }
// }