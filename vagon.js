let hak = 4;
let tahmin;
let sayi = Math.round(Math.random() * 10);

let note = [0, 100, 75, 50, 25];
for (let i = 1; i <= hak; i++) {
  

  let tahmin = Number(prompt("Tahmini Giriniz: "));
  if (sayi == tahmin) {
    
    console.log(
      "aferin " + [i] + ". denemede bildin  " + `${note[i]}` + "  aldın"
    );
   

    break;
  } else if (sayi > tahmin) {
    console.log("büyük sayi giriniz");
  } else if (sayi < tahmin) {
    console.log("küçük sayi giriniz");
  }
  if (i == 4) {
    console.log("hakkınız kalmadı");
  }
  
}
