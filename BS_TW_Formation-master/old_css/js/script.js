const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener('click', function () {

    const menuList = document.getElementById('menuList');

    menuList.classList.toggle('isMobileHidden');

});