var list: any = [];
let count: number = 0;
document.getElementById("add__btn")?.addEventListener("click", function () {
    let inputValue = (<HTMLInputElement>document.getElementById('input__item')).value;
    list.push(inputValue);
    count++;
    
    if (inputValue == '' || null || undefined) {
        document.getElementById('span__warning')!.style.display = 'block';
    }
    if (count >= 15) {
        document.getElementById('span__list__long')!.style.display = 'block';
    }
    if (count <= 15 && inputValue.length >= 1) {
        (<HTMLInputElement>document.getElementById('span__warning')).style.display = 'none';
        let listHTML = `<li style="text-align: center; height: 50px; line-height: 50px" class="li__items" id="list__item-${count}">${inputValue}<button class="btn btn-danger" style="position: relative; margin-top: 5px; margin-right: 5px; float: right;" type="button">&times;</button></li>`;
        document.getElementById("ul__list")?.insertAdjacentHTML('beforebegin', listHTML);
        (<HTMLInputElement>document.getElementById('input__item')).value = '';
    }
})