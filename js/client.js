const showHide1 = () => {
    let readMoreDiv = document.querySelector("#more1");
    if (readMoreDiv.style.display === "block") {
      readMoreDiv.style.display = "none"
      btn1.textContent = "Read More..."
    } else {
      readMoreDiv.style.display = "block";
      btn1.textContent = "Read Less..."
    }
 }

 let btn1 = document.querySelector('#btn1');
 btn1.addEventListener('click', showHide1);