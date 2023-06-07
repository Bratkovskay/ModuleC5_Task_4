const onBtnClick = () => {
    const widthInput = document.getElementById("widthInput")
    const heightInput = document.getElementById("heightInput")
    const width = parseInt(widthInput.value)
    const height = parseInt(heightInput.value)
    console.log (`typeof width = ${typeof width}`)
    console.log (`typeof height = ${typeof height}`)
    if (typeof width !== number || typeof height !== number) {
        console.log ("Это не число")
        return undefined;
    }
    if (width < 100 || width > 300 || height < 100 || height > 300) {
        console.log ("Число вне диапазона от 100 до 300")
        return undefined;
    }
    const URL = `/some/path/${width}/${height}`
    console.log (`Мы отправили запрос на ${URL}`)
    let promise = fetch(URL)
        .then((response)=> {console.log("Тут запрос выполнился успешно")})
        .catch((e)=> {console.log(`Тут запрос не выполнился ${e}`)});

  }

