let InputData = document.getElementById("default-search");
let BtnData = document.getElementById("inputBtn");
let TextData = document.getElementById("textData");
let count = 1;

BtnData.addEventListener('click', () => {
    TextData.innerHTML += `
        <h1 class="text-[30px] text-orange-200 font-serif font-semibold pt-[10px] pl-[20px]">${count}. ${InputData.value}</h1>
    `;
    count++;
    InputData.value = "";
});