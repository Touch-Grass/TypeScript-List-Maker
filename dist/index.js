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
    if (inputValue.length >= 1) {
        document.getElementById('span__warning').style.display = 'none';
        let listHTML = `<li style="text-align: center; height: 50px; line-height: 50px" class="li__items" id="list__item-${count}">${inputValue}
        <button onclick="deleteList(${count})" class="btn btn-danger btn__remove" type="button" style="position: relative; margin-top: 5px; margin-right: 5px; float: right;" type="button">&times;</button>
        <button id="button__star-${count}" onclick="starItem(${count})"class="btn btn__remove" type="button" style="position: relative; margin-top: 5px; margin-right: 5px; float: right; backgroundColor: #808080" type="button"><img src="https://img.icons8.com/material-outlined/20/undefined/star--v2.png"/></button></li>`;
        (_a = document.getElementById("ul__list")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforebegin', listHTML);
        document.getElementById('input__item').value = '';
    }
});
function deleteList(count) {
    list.splice(count - 1, 1);
    document.getElementById(`list__item-${count}`).remove();
}
function starItem(count) {
    let elem = document.getElementById(`list__item-${count}`);
    elem.style.backgroundColor = elem.style.backgroundColor == 'gold' ? 'gray' : 'gold';
}
//# sourceMappingURL=index.js.map