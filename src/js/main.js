var myNodelist = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");

      var myUL = [myuls];
      savetodos();
      myUL = [get];
      myUL.push(myuls);
      var get = JSON.parse(localStorage.getItem("myUL"));
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    // alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function savetodos() {
  localStorage.setItem("myUL", JSON.stringify(myuls));
}

class myUL {
  interest;
  done;
}

let myul = {
  interest: "Running",
  done: false,
};

let myul2 = new myUL();
myul2.interest = "Tennis";
myul2.done = false;

let myul3 = new myUL();
myul3.interest = "Fotball";
myul3.done = false;

let myul4 = new myUL();
myul4.interest = "Ski";
myul4.done = false;

let names = 0;

let ulTag = document.getElementById("myUL");

let myuls = [myul, myul2, myul3, myul4];

myuls.splice();
console.log(4, myuls);

for (let i = 0; i < myuls.length; i++) {
  let li = document.createElement("li");

  var span = document.createElement("span");

  var txt = document.createTextNode("\u00D7");

  let ull = document.createElement("button");
  li.innerHTML = myuls[i].interest;

  ull.appendChild(span);
  li.appendChild(span);
  ulTag.appendChild(li);

  span.className = "close";
  span.appendChild(txt);

  span.addEventListener("click", () => {
    li.remove();
    myuls[i].interest;

    myuls[i].done = true;
  });
}

function check() {
  for (let i = 0; i < myuls.length; i++) {
    let li = document.createElement("li");

    var span = document.createElement("span");

    var txt = document.createTextNode("\u00D7");

    let ull = document.createElement("button");
    li.innerHTML = myuls[i].interest;

    ull.appendChild(span);
    li.appendChild(span);
    ulTag.appendChild(li);

    span.className = "close";
    span.appendChild(txt);

    // span.addEventListener("click", () => {
    //   li.remove();
    myuls[i].interest;

    myuls[i].done = true;
  }
}
