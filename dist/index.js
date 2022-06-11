"use strict";
var _a;
var list = [];
let count = 0;
(_a = document.getElementById("add__btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    let inputValue = document.getElementById('input__item').value;
    list.push(inputValue);
    count++;
    if (inputValue == '' || null || undefined) {
        document.getElementById('span__warning').style.display = 'block';
    }
    if (count >= 15) {
        document.getElementById('span__list__long').style.display = 'block';
    }
    if (count <= 15 && inputValue.length >= 1) {
        document.getElementById('span__warning').style.display = 'none';
        let listHTML = `<li style="text-align: center; height: 50px; line-height: 50px" class="li__items" id="list__item-${count}">${inputValue}<button onclick="deleteList(${count})" class="btn btn-danger btn__remove" type="button" style="position: relative; margin-top: 5px; margin-right: 5px; float: right;" type="button">&times;</button></li>`;
        (_a = document.getElementById("ul__list")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforebegin', listHTML);
        document.getElementById('input__item').value = '';
        console.log(list);
    }
});

function deleteList(count) {
    console.log('Deleting');
    list.splice(count -1, 1);
    console.log(list);
}
//# sourceMappingURL=index.js.map