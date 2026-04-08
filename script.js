const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

mobileToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      alert("❌ البريد الإلكتروني غير صحيح! الرجاء التحقق من البريد.");
      document.getElementById("email").focus();
      return;
    }
    
    alert("✅ شكرًا لتواصلك معنا! سنرد عليك قريبًا.");
    contactForm.reset();
  });
}
