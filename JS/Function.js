let formElement = document.querySelector(".js-form");
let inputElement = document.querySelector(".js-input");
let optionInputElement = document.querySelector(".js-optionInput");
let optionResultElement = document.querySelector(".js-option-result");
let reslut = document.querySelector(".js-result");


const welcome = () => {
    console.log("Hello Developer");
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let input = inputElement.value;
    let optionInput = optionInputElement.value;
    let optionResult = optionResultElement.value;
    let exchangeResult = 0;

    const change = () => {
        switch (true) {
            case (optionInput === "EUR" && optionResult === "EUR"):
                exchangeResult = input * 1;
                reslut.innerText = exchangeResult;
                break;

            case (optionInput === "EUR" && optionResult === "USD"):
                exchangeResult = input * 1.1;
                reslut.innerText = exchangeResult;
                break;

            case (optionInput === "EUR" && optionResult === "PLN"):
                exchangeResult = input * 4.43;
                reslut.innerText = exchangeResult;
                break;

            case (optionInput === "USD" && optionResult === "USD"):
                exchangeResult = input * 1;
                reslut.innerText = exchangeResult;
                break;

            case (optionInput === "USD" && optionResult === "EUR"):
                exchangeResult = input * 0.91;
                reslut.innerText = exchangeResult;

                break;

            case (optionInput === "USD" && optionResult === "PLN"):
                exchangeResult = input * 4.04;
                reslut.innerText = exchangeResult;
                break;

            case (optionInput === "PLN" && optionResult === "PLN"):
                exchangeResult = input * 1;
                reslut.innerText = exchangeResult;

                break;

            case (optionInput === "PLN" && optionResult === "USD"):
                exchangeResult = input * 0.25;
                reslut.innerText = exchangeResult;
                break;

            case (optionInput === "PLN" && optionResult === "EUR"):
                exchangeResult = input * 0.23;
                reslut.innerText = exchangeResult;
                break;
            default:
                console.log("brak wybranej waluty");
        }
    }
    change();
    welcome();
})
