document.addEventListener("DOMContentLoaded", function() {
    // ========================================================
    // LOGIKA DROPDOWN SHOWROOM
    // ========================================================
    const showroomToggle = document.getElementById("showroomToggle");
    const showroomDropdown = document.getElementById("showroomDropdown");
    const dropdownWrapper = document.querySelector(".dropdown-wrapper");

    if (dropdownWrapper && showroomDropdown && showroomToggle) {
        // Event Hover yang aman saat berpindah ke menu brand di bawahnya
        dropdownWrapper.addEventListener("mouseenter", function() {
            showroomDropdown.classList.add("show");
        });
        
        dropdownWrapper.addEventListener("mouseleave", function() {
            showroomDropdown.classList.remove("show");
        });

        // Fallback Klik untuk pengguna perangkat mobile / layar sentuh
        showroomToggle.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            showroomDropdown.classList.toggle("show");
        });

        window.addEventListener("click", function(event) {
            if (!dropdownWrapper.contains(event.target)) {
                showroomDropdown.classList.remove("show");
            }
        });
    }

    // ========================================================
    // LOGIKA PERPINDAHAN WARNA MERAH PADA PAGINATION (1, 2, 3)
    // ========================================================
    const pageItems = document.querySelectorAll('.custom-pagination .page-item');

    pageItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Cek apakah link tujuan hanya '#' (tidak pindah file html)
            if(this.querySelector('a').getAttribute('href') === '#') {
                e.preventDefault(); 
            }
            
            // Hapus kelas 'active' (warna merah) dari halaman yang aktif sebelumnya
            const currentActive = document.querySelector('.custom-pagination .page-item.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            
            // Tambahkan kelas 'active' (warna merah) ke kotak yang baru saja diklik
            this.classList.add('active');
        });
    });

    // ========================================================
    // LOGIKA MODAL POP-UP PEMBAYARAN BERHASIL (VELOCE ELITE)
    // ========================================================
    const paymentForm = document.getElementById('paymentForm');
    const successModal = document.getElementById('successModal');
    const btnKembali = document.getElementById('btnKembali');

    // Cek dulu apakah elemen form pembayaran ada di halaman ini
    if (paymentForm && successModal && btnKembali) {
        
        // Ketika form disubmit (Tombol BAYAR diklik dan input valid)
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Menahan reload halaman bawaan browser
            successModal.classList.add('show'); // Memunculkan modal sukses Figma
        });

        // Ketika tombol KEMBALI di dalam modal diklik
        btnKembali.addEventListener('click', function() {
            successModal.classList.remove('show'); // Menyembunyikan modal sukses
            paymentForm.reset(); // Mengosongkan kembali form data diri & kartu
        });
    }
});