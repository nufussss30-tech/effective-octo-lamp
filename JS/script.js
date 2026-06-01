function toggleBerita() {
  const berita = document.getElementById('detailBerita');

  berita.classList.toggle('d-none');
}

function showImage(src) {
  document.getElementById('modalImage').src = src;
}
