const qrform = document.getElementById("qrform");
const qrimage = document.getElementById("qrimage");
const qr_container = document.getElementById("qr-container");

const showqrcode = (url) => {
    if (!url)
        return;
    qrimage.src = url;
    qr_container.classList.add("show");
};


qrform.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents page reload//

    const formdata = new FormData(qrform);
    const text = formdata.get("qrtext");
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`




    // console.log("text", text);
    showqrcode(qrURL);
    
    
})


