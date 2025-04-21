const resultDiv = document.getElementById("result");
const button = document.getElementById("randomBtn");

const funFacts = {
  Japan: "Sushi, sakura i futuristički WC-i 🍣🌸",
  Brazil: "Karnevali i Amazon 🌴🎭",
  Iceland: "Gejziri, sjeverna svjetlost i Björk ❄️🌌",
  Egypt: "Piramide, mumije i Nil 🏺🌊",
  Australia: "Kenguri, surfanje i obrnut Božić 🐨🏄‍♂️",
};

button.addEventListener("click", async () => {
  resultDiv.innerHTML = "Tražimo destinaciju... ✈️";
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    const random = countries[Math.floor(Math.random() * countries.length)];

    const name = random.name.common;
    const capital = random.capital ? random.capital[0] : "Nepoznato";
    const currency = random.currencies
      ? Object.values(random.currencies)[0].name
      : "Nepoznata";
    const timezone = random.timezones ? random.timezones[0] : "Nepoznata";
    const fact = funFacts[name] || "Zanimljivo mjesto za istražit! 🌍";

    resultDiv.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Glavni grad:</strong> ${capital}</p>
      <p><strong>Valuta:</strong> ${currency}</p>
      <p><strong>Vremenska zona:</strong> ${timezone}</p>
      <p><strong>Zanimljivost:</strong> ${fact}</p>
    `;
  } catch (err) {
    resultDiv.innerHTML = "Nešto je pošlo po krivu. 😢";
    console.error(err);
  }
});
