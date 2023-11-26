// Toggle class active untuk parfume menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika parfume menu di klik
document.querySelector("#parfume-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#parfume-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Klik tombol detail item
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");

itemDetailButtons2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = "flex";
    e.preventDefault();
  };
});

const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButtons3 = document.querySelectorAll(".item-detail-button3");

itemDetailButtons3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = "flex";
    e.preventDefault();
  };
});

const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButtons4 = document.querySelectorAll(".item-detail-button4");

itemDetailButtons4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close detail item
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// keluar dari fitur detail item dengan klik disembarang tempat selain close(X)
window.onclick = (e) => {
  if (
    e.target === itemDetailModal ||
    e.target === itemDetailModal2 ||
    e.target === itemDetailModal3 ||
    e.target === itemDetailModal4
  ) {
    itemDetailModal.style.display = "none";
    itemDetailModal2.style.display = "none";
    itemDetailModal3.style.display = "none";
    itemDetailModal4.style.display = "none";
  }
};

// Notifikasi klik tombol beli (tombol keranjang)
var btnBeli = document.querySelector("#btn-beli");
btnBeli.addEventListener("click", function () {
  window.localStorage.setItem("status", "beli");
  alert("Pembelian berhasil!");
});

var btnBeli = document.querySelector("#btn-beli2");
btnBeli.addEventListener("click", function () {
  window.localStorage.setItem("status", "beli");
  alert("Pembelian berhasil!");
});

var btnBeli = document.querySelector("#btn-beli3");
btnBeli.addEventListener("click", function () {
  window.localStorage.setItem("status", "beli");
  alert("Pembelian berhasil!");
});

var btnBeli = document.querySelector("#btn-beli4");
btnBeli.addEventListener("click", function () {
  window.localStorage.setItem("status", "beli");
  alert("Pembelian berhasil!");
});

// Notifikasi klik tombol tambahkan ke keranjang pada detail item
function addToCart() {
  alert("Produk telah ditambahkan ke keranjang belanja!");
}
document
  .getElementById("add-to-cart-button")
  .addEventListener("click", addToCart);
document
  .getElementById("add-to-cart-button2")
  .addEventListener("click", addToCart);
document
  .getElementById("add-to-cart-button4")
  .addEventListener("click", addToCart);

function addToCart3() {
  alert("Produk belum tersedia saat ini! Pilih produk lain.");
}
document
  .getElementById("add-to-cart-button3")
  .addEventListener("click", addToCart3);
