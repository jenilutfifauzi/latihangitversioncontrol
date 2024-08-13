function calculateArea() {
    // Ambil nilai dari input
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validasi input
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Silakan masukkan nilai yang valid untuk alas dan tinggi.');
        return;
    }

    // Hitung luas segitiga
    const area = 0.5 * base * height;

    // Tampilkan hasil
    document.getElementById('area').textContent = `${area.toFixed(2)}`;
}
