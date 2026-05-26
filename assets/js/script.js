function navigateTo(pageId) {
    // 1. Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page-container');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });

    // 2. Tampilkan halaman yang dituju
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }

    // 3. Ubah status aktif pada menu navigasi
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active-link');
        
        // Deteksi tombol mana yang sedang diklik berdasarkan pageId
        if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(pageId)) {
            item.classList.add('active-link');
        }
    });

    // 4. Scroll otomatis ke bagian paling atas
    window.scrollTo(0, 0);
}