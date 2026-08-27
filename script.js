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
.reviews-section {
  padding: 90px 20px;
  background: #0a0a0a;
  color: #fff;
}

.reviews-container {
  max-width: 1100px;
  margin: auto;
}

.reviews-heading {
  text-align: center;
  margin-bottom: 45px;
}

.section-tag {
  font-size: 13px;
  letter-spacing: 3px;
  opacity: 0.7;
  margin-bottom: 12px;
}

.reviews-heading h2 {
  font-size: 42px;
  margin: 0 0 12px;
}

.reviews-heading p:last-child {
  color: #aaa;
}

.reviews-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 50px;
}

.review-card {
  background: #151515;
  border: 1px solid #292929;
  border-radius: 16px;
  padding: 25px;
}

.review-stars {
  font-size: 20px;
  letter-spacing: 3px;
  margin-bottom: 15px;
}

.review-card p {
  color: #ccc;
  line-height: 1.6;
}

.review-card h4 {
  margin-top: 20px;
  margin-bottom: 0;
}

.review-form-box {
  max-width: 650px;
  margin: auto;
  padding: 30px;
  background: #151515;
  border: 1px solid #292929;
  border-radius: 18px;
}

.review-form-box h3 {
  font-size: 26px;
  margin-top: 0;
  margin-bottom: 25px;
}

#reviewForm {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#reviewForm input,
#reviewForm select,
#reviewForm textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid #333;
  background: #0d0d0d;
  color: #fff;
  font-size: 15px;
  outline: none;
}

#reviewForm textarea {
  resize: vertical;
}

#reviewForm button {
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: #fff;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
}

#reviewForm button:hover {
  opacity: 0.85;
}

@media (max-width: 800px) {
  .reviews-list {
    grid-template-columns: 1fr;
  }

  .reviews-heading h2 {
    font-size: 32px;
  }
    }
