const layar = document.getElementById('layar');
const tombol = document.querySelectorAll('.tombol button');
const riwayatTable = document.getElementById('riwayat').querySelector('tbody');

let nilaiSaatIni = '';
let nilaiSebelumnya = '';
let operasi = '';

tombol.forEach(tombol => {
  tombol.addEventListener('click', () => {
    const nilaiTombol = tombol.textContent;

    if (nilaiTombol === 'CE') {
      nilaiSaatIni = '';
      nilaiSebelumnya = '';
      operasi = '';
      layar.value = '';
    } else if (nilaiTombol === '=') {
      let hasil = 0;
      if (operasi === '+') {
        hasil = parseFloat(nilaiSebelumnya) + parseFloat(nilaiSaatIni);
      } else if (operasi === '-') {
        hasil = parseFloat(nilaiSebelumnya) - parseFloat(nilaiSaatIni);
      } else if (operasi === '*') {
        hasil = parseFloat(nilaiSebelumnya) * parseFloat(nilaiSaatIni);
      } else if (operasi === '/') {
        hasil = parseFloat(nilaiSebelumnya) / parseFloat(nilaiSaatIni);
      }

      // Menambahkan riwayat perhitungan ke tabel
      const row = riwayatTable.insertRow();
      row.insertCell(0).textContent = nilaiSebelumnya;
      row.insertCell(1).textContent = operasi;
      row.insertCell(2).textContent = nilaiSaatIni;
      row.insertCell(3).textContent = hasil;

      nilaiSebelumnya = '';
      operasi = '';
      layar.value = hasil;
      nilaiSaatIni = '';
    } else if (nilaiTombol === '+' || nilaiTombol === '-' || nilaiTombol === '*' || nilaiTombol === '/') {
      nilaiSebelumnya = nilaiSaatIni;
      nilaiSaatIni = '';
      operasi = nilaiTombol;
    } else {
      nilaiSaatIni += nilaiTombol;
      layar.value = nilaiSaatIni;
    }
  });
});
