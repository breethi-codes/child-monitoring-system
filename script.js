
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {

    const childName = document.getElementById("childName").value;
    const age = document.getElementById("age").value;
    const parentName = document.getElementById("parentName").value;
    const phone = document.getElementById("phone").value;

    localStorage.setItem("childName", childName);
    localStorage.setItem("age", age);
    localStorage.setItem("parentName", parentName);
    localStorage.setItem("phone", phone);

    
const qrData =
`Child Name: ${childName}
Age: ${age}
Parent Name: ${parentName}
Phone: ${phone}`;

document.getElementById("qrcode").innerHTML = "";

new QRCode(document.getElementById("qrcode"), {
        text: qrData,
        width: 220,
        height: 220
    });

    alert("Details Saved Successfully!");
});