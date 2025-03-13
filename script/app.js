document.addEventListener("DOMContentLoaded", function() {
  const paymentBtn = document.getElementById("paymentBtn");
  if (paymentBtn) {
    paymentBtn.addEventListener("click", function() {
      const paymentDetails = document.querySelector(".main__payment-details");
      paymentDetails.classList.toggle("active");

      if (paymentDetails.classList.contains("active")) {
        setTimeout(() => {
          paymentDetails.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    });
  } else {
    console.error("Елемент з ID 'paymentBtn' не знайдено.");
  }
});


function copyText(elementId) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text);
}