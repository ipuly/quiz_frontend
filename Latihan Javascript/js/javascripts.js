// Cara penulisan ini namanya adalah "fungsi" (function)
// akan dipelajari nanti yah !
function kalkulasiNilaiTotal(uts, uas, tugas) {
    // TODO: 1. set nilaiUts dari parameter `uts`
    const nilaiUts = uts;

    // TODO: 2. set nilaiUas dari parameter `uas`
    const nilaiUas = uas;

    // TODO: 3. set nilaiTugas dari parameter `tugas`
    const nilaiTugas = tugas;

    // TODO: 4. lakukan perhitungan di sini
    // nilaiTotal didapat dari penjumlahan sebagai berikut
    // - 30% dari nilai UTS
    // - 30% dari nilai Tugas
    // - 40% dari nilai UAS
    const nilaiTotal = (nilaiUts * 30 / 100) + (nilaiUas * 40 / 100) + (nilaiTugas * 30 / 100);

    // JANGAN DIMODIFIKASI
    return nilaiTotal;
};

function cetakHasil(total) {
    // TODO: 5. set nilaiTotal dari parameter `total`
    const nilaiTotal = total;

    // TODO: 6. dengan menggunakan relational operator
    // buatlah pernyataan apakah orang ini dianggap lulus atau tidak
    // dilihat dari apakah nilaiTotal lebih besar sama dengan 70
    const apakahLulus = nilaiTotal >= 70;

    // Bagian ini tidak DIMODIFIKASI
    let kalimatHasil;

    // Cara penulisan ini namanya adalah `pernyataan kondisi` (conditional statement)
    // akan dipelajari nanti yah !
    if (apakahLulus) {
        // TODO: 7. tuliskan hasil akhir - berhasil lulus
        // Ganti kalimatHasil jadi [Selamat ! Anda lulus dengan nilai <nilaiTotal>.]

        console.log("Selamat ! Anda lulus dengan nilai " + nilaiTotal);
    } else {
        // TODO: 8. tuliskan hasil akhir - tidak lulus
        // Ganti kalimatHasil jadi [Mohon maaf... Anda dinyatakan tidak lulus karena nilai Anda kurang dari 70.]

        console.log("Mohon maaf... Anda dinyatakan tidak lulus karena nilai Anda kurang dari 70.");
    }
}

// Main function
// JANGAN DIMODIFIKASI
function main() {
    // Anak 1: Lulus
    let nilaiAnakPertama = kalkulasiNilaiTotal(80, 70, 70);
    cetakHasil(nilaiAnakPertama);
    // Output: Selamat ! Anda lulus dengan nilai 73.

    // Anak 2: Tidak Lulus
    let nilaiAnakKedua = kalkulasiNilaiTotal(70, 60, 70);
    cetakHasil(nilaiAnakKedua);
    // Output: Mohon maaf... Anda dinyatakan tidak lulus karena nilai Anda kurang dari 70.
}

main();