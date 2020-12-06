const moveItemForCurrentTabMobile = 
    `
        <div class="col-12 d-xl-none moveItem--mobile">
            <img src="./assets/img/img-movie-reponsive/tiec-trang-mau-blood-moon-party-_540x225.png" alt="">
            <span class="type">C18</span>
        </div>
    `;

const renderMoveItemForCurrentTabMobile = function(){

    var movieItems = "";
    for (var i = 1; i < 4; i ++) {
        movieItems += moveItemForCurrentTabMobile;
    }
    return movieItems;
}

const rowMobile = 
   `
      <div class="row">
        ${renderMoveItemForCurrentTabMobile()}
      </div>
   `; 

const tabCurrentContentMobie = rowMobile;
