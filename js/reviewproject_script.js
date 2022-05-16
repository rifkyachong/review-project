//local database
const reviewdata = [
  {
    id: 1,
    name: "Rifky Achong",
    img: "./unnamed.jpg.webp",
    job: "Software Engineer",
    textreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    name: "Lain Iwakura",
    img: "./lain.jpg",
    job: "Network Engineer",
    textreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 2",
  },
  {
    id: 3,
    name: "Myne",
    img: "./maine.png",
    job: "Librarian",
    textreview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 3",
  },
];

//function declaration

const updatereview = function (index) {
  //change value
  document.getElementById("picture").src = reviewdata[index].img;
  document.getElementById("profile-name").innerText = reviewdata[index].name;
  document.getElementById("profile-job").innerText = reviewdata[index].job;
  document.getElementById("text-review").innerText =
    reviewdata[index].textreview;
  console.log("updatereview executed!");
};

const reviewfadeout = function () {
  document.getElementById("picture").classList.add("transition");
  document.getElementById("profile-name").classList.add("transition");
  document.getElementById("profile-job").classList.add("transition");
  document.getElementById("text-review").classList.add("transition");
  document.getElementById("leftarrow").disabled = true;
  document.getElementById("rightarrow").disabled = true;
  document.getElementById("random").disabled = true;
  window.setTimeout(function () {
    updatereview(current_index);
  }, 1000);
};

const nextindex = function () {
  reviewfadeout();
  if (current_index < reviewdata.length - 1) {
    current_index++;
  } else {
    current_index = 0;
  }
};

const previousindex = function () {
  reviewfadeout();
  if (current_index > 0) {
    current_index--;
  } else {
    current_index = reviewdata.length - 1;
  }
};

const randomindex = function () {
  reviewfadeout();
  current_index = Math.floor(Math.random() * reviewdata.length);
};

//event listeners
document.getElementById("picture").addEventListener("animationend", () => {
  document.getElementById("picture").classList.remove("transition");
  document.getElementById("profile-name").classList.remove("transition");
  document.getElementById("profile-job").classList.remove("transition");
  document.getElementById("text-review").classList.remove("transition");

  document.getElementById("leftarrow").disabled = false;
  document.getElementById("rightarrow").disabled = false;
  document.getElementById("random").disabled = false;
});

//code
//variable declaration
let current_index = 1;
document.getElementById("page-wrapper").classList.add("refreshpage");
updatereview(current_index);
