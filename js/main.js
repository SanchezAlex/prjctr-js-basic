function calc() {
    let inputValue = document.getElementsByClassName("input-main");
    let result = 0;

    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i].value) result += parseInt(inputValue[i].value);
    }
    if (result == 0) return;

    let valueResult = document.getElementById('result');
    valueResult.innerHTML = result;

    valueResult.setAttribute("style", "padding: 5px; color: #229327; background-color: #fff;");
}