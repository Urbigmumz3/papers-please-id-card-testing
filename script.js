// quantity is a quality all its own
function randomDistrict() {
  var names = new Array(
    "Altan",
    "Vescillo",
    "Burnton",
    "Octovalis",
    "Gennistora",
    "Lendiforma",
    "Wozenfield",
    "Fardesto"
  );
  var number = Math.floor(Math.random() * names.length);
  var name = names[number];
  return name.toUpperCase();
}
function randomMaleFirstName() {
  var names = new Array(
    "Jorji",
    "Pablo",
    "Isacc",
    "Dijana",
    "Pietro",
    "Galen",
    "Samuel",
    "Dmitry"
  );
  var number = Math.floor(Math.random() * names.length);
  var name = names[number];
  return name;
}
function randomFemaleFirstName() {
  var names = new Array(
    "Karina",
    "Amelia",
    "Loren",
    "Estra",
    "Jens",
    "Jeanah"
  );
  var number = Math.floor(Math.random() * names.length);
  var name = names[number];
  return name;
}
function randomLastName() {
  var names = new Array(
    "Costava",
    "Lezgar",
    "Wong",
    "Li",
    "Gojkovich",
    "Reinecker",
    "Gromova",
    "Beresfoda",
    "Lauridsen",
    "Corsi",
    "Hoskin",
    "Wilson",
    "Meding",
    "Lyashevick"
  );
  var number = Math.floor(Math.random() * names.length);
  var name = names[number];
  return name;
}
function randomFemaleIMG() {
  var images = new Array(
    "/images/pic.png",
    "/images/pic4.png"
  );
  var number = Math.floor(Math.random() * images.length);
  var image = images[number];
  document.getElementById("image").src = image;
}
function randomMaleIMG() {
  var images = new Array(
    "/images/jorji.png",
    "/images/pic1.png",
    "/images/pic2.png",
    "/images/pic3.png"
  );
  var number = Math.floor(Math.random() * images.length);
  var image = images[number];
  document.getElementById("image").src = image;
}
function randomDate() {
  var year = Math.floor(Math.random() * (1965 - 1930 + 1) + 1930);
  var day = Math.floor(Math.random() * (28 - 1 + 1) + 1);
  var month = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  if (day.toString().length == 1) day = "0" + day;
  if (month.toString().length == 1) month = "0" + month;
  var date = month + "." + day + "." + year;
  return date;
}

function findht() {
  var feet = Math.floor(Math.random() * (6 - 5 + 1) + 5);
  var inches = Math.floor(Math.random() * (12 - 0 + 1) + 0);
  var cm = feet * 30.48;
  var cm2 = inches * 2.54;
  var ht = Math.floor(cm + cm2);
  return ht + "cm";
}
//Math.floor(Math.floor(Math.random() * (6 - 5 + 1) + 5) * 30.48 + Math.floor(Math.random() * (12 - 0 + 1) + 0) * 2.54) + "cm";
var ht = findht();
var wt = Math.floor(Math.random() * (60 - 120 + 1) + 120) + "kg";
var dis = randomDistrict();

function randomGender() {
  var gender;
  var number = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  if (number >= 5) gender = "male";
  else if (number <= 4) gender = "female";
  if (gender === "male") {
    randomMaleIMG();
    return randomMaleFirstName();
  } else if (gender === "female") {
    randomFemaleIMG();
    return randomFemaleFirstName();
  }
  return;
}

const personName = {
  firstName: randomGender(),
  lastName: randomLastName()
};
const person = {
  firstName: personName.firstName,
  lastName: personName.lastName,
  DOB: randomDate(),
  HT: ht,
  WT: wt,
  fullName: personName.firstName + ",<br>" + personName.lastName,
  district: dis
};

var District = person.district + " DISTRICT";
var NAME = person.fullName;
var Height = person.HT;
var Weight = person.WT;
var DOB = "DOB " + person.DOB;

document.getElementById("HT").innerHTML = Height;
document.getElementById("Name").innerHTML = NAME;
document.getElementById("WT").innerHTML = Weight;
document.getElementById("DOB").innerHTML = DOB;
document.getElementById("District").innerHTML = District;