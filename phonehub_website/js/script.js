function addToCart(name) {
  const toast = document.getElementById("toast");
  toast.textContent = "✓ Đã thêm " + name + " vào giỏ hàng";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}
function contactForm(e) {
  e.preventDefault();
  const toast = document.getElementById("toast");
  toast.textContent = "✓ Đăng ký nhận tin thành công!";
  toast.classList.add("show");
  e.target.reset();
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// ===== DARK / LIGHT MODE =====
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("phonehub-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀";
} else {
  themeToggle.textContent = "☾";
}
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("phonehub-theme", isDark ? "dark" : "light");
});
