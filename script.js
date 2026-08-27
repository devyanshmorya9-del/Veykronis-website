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
const reviewForm = document.getElementById("reviewForm");
const reviewsList = document.getElementById("reviewsList");

let reviews = JSON.parse(localStorage.getItem("ve ykronisReviews")) || [];

function displayReviews() {
  reviewsList.innerHTML = "";

  if (reviews.length === 0) {
    reviewsList.innerHTML = `
      <p style="text-align:center; color:#888; grid-column:1/-1;">
        Be the first to leave a review.
      </p>
    `;
    return;
  }

  reviews.forEach(review => {
    const card = document.createElement("div");
    card.className = "review-card";

    card.innerHTML = `
      <div class="review-stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
      <p>${review.text}</p>
      <h4>${review.name}</h4>
    `;

    reviewsList.appendChild(card);
  });
}

reviewForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("reviewName").value.trim();
  const rating = Number(document.getElementById("reviewRating").value);
  const text = document.getElementById("reviewText").value.trim();

  if (!name || !rating || !text) return;

  reviews.push({
    name: name,
    rating: rating,
    text: text
  });

  localStorage.setItem("veykronisReviews", JSON.stringify(reviews));

  reviewForm.reset();
  displayReviews();

  alert("Thank you for your review!");
});

displayReviews();
