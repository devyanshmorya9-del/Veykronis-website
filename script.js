const BUSINESS_EMAIL = "siosmic18@gmail.com";

const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent("New Veykronis project enquiry");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nProject:\n${data.get("project")}`
  );
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});

const banner = document.getElementById("cookieBanner");
const saved = localStorage.getItem("veykronis_cookie_choice");
if (saved) banner.style.display = "none";

document.getElementById("accept").addEventListener("click", () => {
  localStorage.setItem("veykronis_cookie_choice", "accepted");
  banner.style.display = "none";
});
document.getElementById("reject").addEventListener("click", () => {
  localStorage.setItem("veykronis_cookie_choice", "rejected");
  banner.style.display = "none";
});
