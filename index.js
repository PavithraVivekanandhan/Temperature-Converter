function celToFah(){
    const cel = document.getElementById("celsius").value;
    let fah = cel*(9/5)+32;
    fah = fah.toFixed(2);

    let write1 = document.getElementById("write1");
    write1.textContent = `${cel}°C = ${fah}°F`;
}

function fahToCel(){
    const fah = document.getElementById("fahren").value;
    let cel = (fah-32)*(5/9);
    cel = cel.toFixed(2);

    let write2 = document.getElementById("write2");
    write2.textContent = `${fah}°F = ${cel}°C`;
}