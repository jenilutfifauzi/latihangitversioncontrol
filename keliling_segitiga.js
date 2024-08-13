function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);
  
    var keliling = sisi1 + sisi2 + sisi3;
  
    document.getElementById("result").textContent = "Keliling segitiga: " + keliling;
  }