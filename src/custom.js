const btnBukaUndangan = document.getElementById('btn-buka-undangan');

// Fungsi untuk menghitung dan memperbarui countdown
function startCountdown() {
    // Waktu target: 20 April 2025 pukul 08.00 WITA (WITA = UTC+8)
    const targetDate = new Date("2025-04-20T08:00:00+08:00");

    // Referensi elemen countdown
    const countdownElements = document.querySelectorAll("#countdown .tracking-widest.text-3xl");

    // Fungsi untuk memperbarui countdown
    function updateCountdown() {
        const now = new Date(); // Waktu sekarang
        const difference = targetDate - now; // Selisih waktu dalam milidetik

        if (difference <= 0) {
            // Jika waktu sudah lewat, set semua nilai menjadi 0
            countdownElements[0].textContent = 0; // Hari
            countdownElements[1].textContent = 0; // Jam
            countdownElements[2].textContent = 0; // Menit
            countdownElements[3].textContent = 0; // Detik
            clearInterval(intervalId); // Hentikan interval
            return;
        }

        // Konversi selisih waktu ke dalam hari, jam, menit, dan detik
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Perbarui elemen di HTML
        countdownElements[0].textContent = days; // Hari
        countdownElements[1].textContent = hours; // Jam
        countdownElements[2].textContent = minutes; // Menit
        countdownElements[3].textContent = seconds; // Detik
    }

    // Jalankan pertama kali agar tidak ada jeda
    updateCountdown();

    // Perbarui setiap detik
    const intervalId = setInterval(updateCountdown, 1000);
}
  
// Panggil fungsi countdown saat DOM siap
document.addEventListener("DOMContentLoaded", startCountdown);
  
(function() {
    AOS.init({
        once: true,
    });
    
    Reveal.initialize({
        hash: false,
        view: 'scroll',
        scrollProgress: true,
        width: 420,
        height: '100%',
        center: false,
    });

    btnBukaUndangan.addEventListener('click', () => {
        document.getElementById('opening').scrollIntoView({ behavior: 'smooth' });
        
        const music = document.getElementById('music');
        music.play();
    });

    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has('guest')) {
        document.getElementById('guest-name').textContent = queryParams.get('guest');
    }
 })();