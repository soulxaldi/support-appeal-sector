const checkIPBan = () => {
  let IPxhr = new XMLHttpRequest();
  IPxhr.open("POST", "./php/checkBan.php", true);
  IPxhr.onload = () => {
    if (IPxhr.readyState === XMLHttpRequest.DONE) {
      if (IPxhr.status === 200) {
        let data = IPxhr.response;

        if (data == "found") {
          window.location.href = "https://404.html";
        }
      }
    }
  };

  IPxhr.send();
};


window.addEventListener('DOMContentLoaded', checkIPBan)

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
  if (event.keyCode == 123) {
    event.preventDefault();
  }
});

document.addEventListener("contextmenu", (event) => event.preventDefault());
