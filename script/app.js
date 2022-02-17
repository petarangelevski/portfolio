const menu = [
    {
        id: 1,
        ime: "Project 1 - Kafeterija Fri",
        img: "./images/kafeterijafri.png",
        info: "Made with: <br> -HTML and<br> -CSS"
    },
    {
        id: 2,
        ime: "Project 2 - Renesansa 1",
        img: "./images/renesansa-1.png",
        info: "Made with: <br> -HTML<br>-CSS<br>-FlexBox"
    },
    {
        id: 3,
        ime: "Project 3 - Renesansa 2",
        img: "./images/renesansa-2.png",
        info: "Made with:<br>-HTML<br>-CSS<br>-Grid<br>-Flexbox<br>-JavaScript"
    },
    {
        id: 4,
        ime: "Project 4 - Renesansa 3",
        img: "./images/inprogress2.png",
        info: "Made with:<br>*Frontend<br>-ReactJS<br>*Backend<br>-NodeJS<br>-MySQL"
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item){
        return`<article class="menu-item">
        <a href="${item.img}" class="fullscreenpic"><img src=${item.img} alt="" class="photo"/></a>
        <div class="item-info">
          <header class="info-title">
            <h4>${item.ime}</h4>
            <h4 class="price"></h4>
            <button type="button" class="info-btn">
              <span class="plus-icon">
                <i class="far fa-plus-square"></i>
              </span>
              <span class="minus-icon">
                <i class="far fa-minus-square"></i>
              </span>
            </button>
          </header>
          <div class="info-text">
          <p>${item.info}</p>
          </div>
          </div>
      </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
    // console.log(displayItems);
    const information = document.querySelectorAll(".item-info");
    information.forEach(function (description) {
        // console.log(description);
        const infoBtns = description.querySelector(".info-btn");
        infoBtns.addEventListener("click", function(){
            information.forEach(function(btn){
                if(btn !== description){
                    btn.classList.remove("show-text");
                }
            });
            description.classList.toggle("show-text");
        });
    });
};

function displayMenuButtons(){
    const materijali = menu.reduce(
        function(values,item){
        if (!values.includes(item.materijal)){
            values.push(item.materijal);
        };
        return values;
    },
    ["site"]
);
}