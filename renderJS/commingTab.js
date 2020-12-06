const moveItemForCommingTab = 
    `<div class="col-xl-3 d-none d-xl-block moveItem --rightSpacing">
        <div class="image">
            <img src="./assets/img/img-movies/tiec-trang-mau.png" alt="">
            <div class="overlay">
                <img src="./assets/img/img-icons/play-video.png" alt="">
            </div>
        </div>
        <div class="desc">
            <span class="type">C18</span>
            <span class="name">Tiệc Trăng Máu á á á á á á á ...</span>
            <div class="overlay">
                <span> MUA VÉ </span>
            </div>
        </div>
        <p class="running-time">100 phút</p>
    </div>`;
const renderMoveItemForCommingTab = function(){

    var movieItems = "";
    for (var i = 1; i < 5; i ++) {
        movieItems += moveItemForCommingTab;
    }
    return movieItems;
}
const rowCommingTab = 
   `
      <div class="row">
        ${renderMoveItemForCommingTab()}
      </div>
   `; 

const tabCommingContent = rowCommingTab + rowCommingTab;
