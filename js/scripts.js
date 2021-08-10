const lengthEl = document.getElementById("length");
const widthEl = document.getElementById("width");
const calculateButton = document.getElementById("calculate");

function calculate() {
  const length = lengthEl.value;
  const width = widthEl.value;
  const square = length * width;
  const pack = 4;
  let packsNeeded = square / pack;
  let packs8 = 0;
  let packs6 = 0;
  while (packsNeeded > 0) {
    if (
      (packsNeeded / 8 > 0 && packsNeeded % 6 !== 0) ||
      packsNeeded % 8 === 0
    ) {
      packs8++;
      packsNeeded -= 8;
    }
    if (packsNeeded / 6 > 0 && packsNeeded % 8 !== 0 && packsNeeded > 0) {
      packs6++;
      packsNeeded -= 6;
    }
  }

  alert(
    `You will need ${packs6} packs of 6pcs, ${packs8} packs of 8pcs, ${Math.abs(
      packsNeeded
    )} pieces left`
  );
}

calculateButton.addEventListener("click", calculate);
