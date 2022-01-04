fetch("https://api.kanye.rest/")
.then((res) => res.json())
.then((data) => {
    document.querySelector("#quote").innerHTML +=`
    <p>${data.quote}</p>
    `
});
