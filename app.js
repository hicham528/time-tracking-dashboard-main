let trakibg_dashboord = document.querySelector(".trakibg_dashboord");
let ArrayData = [];
//fetch json file ===========
const fetchJsonFile = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      ArrayData = data;
      console.log(ArrayData);

      creatAllDashboord();
    });
};
fetchJsonFile();

// creat dashboord
const creatAllDashboord = () => {
    trakibg_dashboord.innerHTML=""
  if (ArrayData.length > 0) {
    ArrayData.forEach((item) => {
      const parentDiv = document.createElement("div");
      parentDiv.classList.add("only_dach");
      parentDiv.innerHTML = `
                  <div class="img_dach">
        <img src="${item.image}" alt="">
      </div>
<div class="Mession_dach">
  <div class="header_dach">
    <h3>${item.title}</h3>
    <img src="images/icon-ellipsis.svg" alt="">
  </div>
  <h1>${item.timeframes.weekly.current}hrs</h1>
  <h4>last week-${item.timeframes.weekly.previous}hrs</h4>
</div>
            `;
            trakibg_dashboord.appendChild(parentDiv)
    });
  }
};

  