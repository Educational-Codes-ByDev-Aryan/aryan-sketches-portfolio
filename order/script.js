// =========================================
// RN Sketches - Premium Order Form
// =========================================

// Replace with your WhatsApp number
const ARTIST_WHATSAPP = "919665530090";

// Elements
const uploadZone = document.getElementById("uploadZone");
const photoInput = document.getElementById("photoInput");
const fileLabel = document.getElementById("fileLabel");

const sketchSize = document.getElementById("sketchSize");
const priceDisplay = document.getElementById("priceDisplay");

const orderForm = document.getElementById("sketchOrderForm");


// ================================
// Upload Box Click
// ================================

uploadZone.addEventListener("click", () => {
    photoInput.click();
});


// ================================
// Show Selected File Name
// ================================

photoInput.addEventListener("change", () => {

    if (photoInput.files.length > 0) {

        fileLabel.textContent =
            photoInput.files[0].name;

    }

});


// ================================
// Drag & Drop Upload
// ================================

uploadZone.addEventListener("dragover", (e) => {

    e.preventDefault();

    uploadZone.style.borderColor = "#b38728";

});

uploadZone.addEventListener("dragleave", () => {

    uploadZone.style.borderColor = "";

});

uploadZone.addEventListener("drop", (e) => {

    e.preventDefault();

    uploadZone.style.borderColor = "";

    if (e.dataTransfer.files.length > 0) {

        photoInput.files = e.dataTransfer.files;

        fileLabel.textContent =
            e.dataTransfer.files[0].name;

    }

});


// ================================
// Change Price
// ================================

sketchSize.addEventListener("change", () => {

    const option =
        sketchSize.options[sketchSize.selectedIndex];

    const price =
        Number(option.dataset.price);

    priceDisplay.textContent =
        "₹" + price.toLocaleString("en-IN");

});


// ================================
// Submit Form
// ================================

orderForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
        document.getElementById("clientName").value.trim();

    const phone =
        document.getElementById("clientPhone").value.trim();

    const email =
        document.getElementById("clientEmail").value.trim();

    const size =
        sketchSize.value;

    const frame =
        document.getElementById("frameType").value;

    const address =
        document.getElementById("address").value.trim();

    const notes =
        document.getElementById("notes").value.trim();

    const image =
        photoInput.files.length > 0
            ? photoInput.files[0].name
            : "Not Uploaded";

    const amount =
        priceDisplay.textContent;


    // Validation

    if (name === "" || phone === "") {

        alert("Please fill all required fields.");

        return;

    }


    // WhatsApp Message

    let message =

        `🎨 *NEW SKETCH ORDER*

👤 Name: ${name}

📱 WhatsApp: ${phone}

📧 Email: ${email || "Not Provided"}

📏 Sketch Size: ${size}

🖼 Frame: ${frame}

📸 Photo: ${image}

🏠 Address:
${address}

📝 Instructions:
${notes || "None"}

💰 Amount:
${amount}

Please send image directly below this message in document format ! Thank you.`;



    const url =

        `https://wa.me/${ARTIST_WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

});