const moveItemForCommingTabMobile = 
    `
        <div class="col-6 d-xl-none moveItem--mobile">
            <img src="./assets/img/img-movies/tiec-trang-mau.png" alt="">
            <span class="type">C18</span>
        </div>
    `;

const renderMoveItemForCommingTabMobile = function(){

    var movieItems = "";
    for (var i = 1; i < 3; i ++) {
        movieItems += moveItemForCommingTabMobile;
    }
    return movieItems;

}

const rowCommingTabMobile = 
   `
      <div class="row">
        ${renderMoveItemForCommingTabMobile()}
      </div>
   `; 

const tabCommingContentMobile = rowCommingTabMobile + rowCommingTabMobile;
