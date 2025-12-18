// --------------- INVENTORY CODE --------------- //
console.log("window.location.href =", window.location.href);
console.log("window.location.search =", window.location.search);

function getInventoryString() {
  const params = new URLSearchParams(window.location.search);
  console.log("Inventory from URL:", params.get("inv")); // should log "001000"
  return params.get("inv") || "000000";
}

function loadInventory() {
  const inv = getInventoryString(); // e.g. "1010"

  if (inv[0] === "1")
    document.getElementById("inventory1").src = "images/radish.png";
  if (inv[1] === "1")
    document.getElementById("inventory2").src = "images/katana.png";
  if (inv[2] === "1")
    document.getElementById("inventory3").src = "images/AztecPotion.png";
  if (inv[3] === "1")
    document.getElementById("inventory4").src = "images/sea_serpent_scale.png";
  if (inv[4] === "1")
    document.getElementById("inventory5").src = "images/frost_giant_tears.png";
  if (inv[5] === "1")
    document.getElementById("inventory6").src = "images/power.png";
}

document.addEventListener("DOMContentLoaded", loadInventory);
// --------------- INVENTORY CODE --------------- //

var g1 = document.getElementById("one");
var g2 = document.getElementById("two");
var g3 = document.getElementById("three");
var g4 = document.getElementById("four");
var g5 = document.getElementById("five");
var g6 = document.getElementById("six");
var g7 = document.getElementById("seven");
var g8 = document.getElementById("eight");
var m = document.getElementById("scare");
var d = document.getElementById("lol");
var u1 = document.getElementById("unlock");

var pictures = [
  "images/DeathGodBody.png",
  "images/WaterGodBody.png",
  "images/SunGodBody.png",
  "images/AirGodBody.png",
];
var pictures1 = [
  "images/WaterGodHead.png",
  "images/SunGodHead.png",
  "images/DeathGodHead.png",
  "images/AirGodHead.png",
];

index = 0;
index1 = 0;
x = 3;

function timeKeepersmenu() {
  const modal = document.getElementById("myModal");
  modal.classList.add("show");
  modal.style.display = "flex";
  m.play();
}
function instructions() {
  const modal2 = document.getElementById("bruh");
  modal2.classList.add("show");
  modal2.style.display = "flex";
}

function hideModal() {
  const modal = document.getElementById("myModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 400);
}

function hideModal2() {
  const modal2 = document.getElementById("bruh");
  modal2.style.display = "none";
  setTimeout(() => (modal2.style.display = "none"), 400);
}
// Close the modal
function closeBruhModal() {
  const modal = document.getElementById("bruhModal");
  modal.classList.remove("show");
  modal.classList.add("hide");
}

function select(img) {
  if (index == 4) {
    index = index - 4;
    img.src = pictures[index];
  } else {
    img.src = pictures[index];
    index = index + 1;
  }
  console.log(x);
  m.play();
}
function select1(img) {
  if (index1 == 4) {
    index1 = index1 - 4;
    img.src = pictures1[index1];
  } else {
    img.src = pictures1[index1];
    index1 = index1 + 1;
  }
  console.log(x);
  m.play();
}

function match() {
  if (
    g1.src.match("images/SunGodHead.png") &&
    g5.src.match("images/SunGodBody.png") &&
    g2.src.match("images/WaterGodHead.png") &&
    g6.src.match("images/WaterGodBody.png") &&
    g3.src.match("images/AirGodHead.png") &&
    g7.src.match("images/AirGodBody.png") &&
    g4.src.match("images/DeathGodHead.png") &&
    g8.src.match("images/DeathGodBody.png")
  ) {
    checkmatch();
    m.pause();
    document.getElementById("inventory3").src = "images/AztecPotion.png";
    // Update inventory string
    let inv = getInventoryString().split("");
    inv[2] = "1"; // slot 3 collected
    const newInv = inv.join("");
    console.log("Updated inventory:", newInv);

    // Redirect with UPDATED inventory
    setTimeout(function () {
      window.location.replace(`https://stitchg.github.io/Final_Room_Time/?inv=${newInv}`);
    }, 500);

    /*const modal = document.getElementById("previouse");
    modal.classList.add("show");
    modal.style.display = "flex";*/
  } else {
    m.play();
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div class="my-text" id="confetti">incorrect</div>'
    );

    setTimeout(() => {
      document.getElementById("confetti").remove();
    }, 1200);
  }
  checkmatch();
  console.log(x);
}
function checkmatch() {
  if (
    g1.src.match("images/SunGodHead.png") &&
    g5.src.match("images/SunGodBody.png")
  ) {
    g1.className = "translucent";
    g1.onclick = null;
    g5.className = "translucent";
    g5.onclick = null;
  }
  if (
    g2.src.match("images/WaterGodHead.png") &&
    g6.src.match("images/WaterGodBody.png")
  ) {
    g2.className = "translucent";
    g2.onclick = null;
    g6.className = "translucent";
    g6.onclick = null;
  }
  if (
    g3.src.match("images/AirGodHead.png") &&
    g7.src.match("images/AirGodBody.png")
  ) {
    g3.className = "translucent";
    g3.onclick = null;
    g7.className = "translucent";
    g7.onclick = null;
  }
  if (
    g4.src.match("images/DeathGodHead.png") &&
    g8.src.match("images/DeathGodBody.png")
  ) {
    g4.className = "translucent";
    g4.onclick = null;
    g8.className = "translucent";
    g8.onclick = null;
  }
}

