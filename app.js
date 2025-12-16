let data = [];

document.querySelector('input').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  const result = await Tesseract.recognize(file, 'eng');
  data.push({ text: result.data.text });
  alert("Card scanned & saved!");
});

function exportCSV() {
  let csv = "Data\n";
  data.forEach(d => csv += `"${d.text.replace(/\n/g, " ")}"\n");
  let blob = new Blob([csv], { type: 'text/csv' });
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'cards.csv';
  a.click();
}
