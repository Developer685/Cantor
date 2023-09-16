{
    const formElement = document.querySelector(".js-form");
    const inputElement = document.querySelector(".js-input");
    const optionInputElement = document.querySelector(".js-optionInput");
    const optionResultElement = document.querySelector(".js-optionResult");
    const result = document.querySelector(".js-result");
   
    const welcome = () => {
        console.log("Hello Developer");
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
       
        let input = inputElement.value;                 // value can change that`s why there is let instead of const
        let optionInput = optionInputElement.value;     // value can change that`s why there is let instead of const
        let optionResult = optionResultElement.value;   // value can change that`s why there is let instead of const


        const calculateResult = () => {
            switch (true) {
                case (optionInput === "EUR" && optionResult === "EUR"):
                    exchangeResult = input * 1;
                    result.innerText = exchangeResult;
                    break;

                case (optionInput === "EUR" && optionResult === "USD"):
                    exchangeResult = input * 1.1;
                    result.innerText = exchangeResult;
                    break;

                case (optionInput === "EUR" && optionResult === "PLN"):
                    exchangeResult = input * 4.43;
                    result.innerText = exchangeResult;
                    break;

                case (optionInput === "USD" && optionResult === "USD"):
                    exchangeResult = input * 1;
                    result.innerText = exchangeResult;
                    break;

                case (optionInput === "USD" && optionResult === "EUR"):
                    exchangeResult = input * 0.91;
                    result.innerText = exchangeResult;
                    break;

                case (optionInput === "USD" && optionResult === "PLN"):
                    exchangeResult = input * 4.04;
                    result.innerText = exchangeResult;
                    break;

                case (optionInput === "PLN" && optionResult === "PLN"):
                    exchangeResult = input * 1;
                    result.innerText = exchangeResult;
                    break;

                case (optionInput === "PLN" && optionResult === "USD"):
                    exchangeResult = input * 0.25;
                    result.innerText = exchangeResult;
                    break;

                case (optionInput === "PLN" && optionResult === "EUR"):
                    exchangeResult = input * 0.23;
                    result.innerText = exchangeResult;
                    break;
                default:
                    console.log("brak wybranej waluty");
            }
        }
        calculateResult();
    }

    const init = () => {
        welcome();
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}