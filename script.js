
const btn = document.querySelector('#search')

btn.addEventListener('click', zipCodeValidation)


function zipCodeValidation() {
    event.preventDefault()

    const zipCodeSearch = document.querySelector('#cep').value
    const zipCodeAPI = fetch(`https://viacep.com.br/ws/${zipCodeSearch}/json/`)
    const resultArea = document.querySelectorAll('.result span')

    zipCodeAPI.then(r => r.json()).then(resultJSON => {
        resultArea.forEach(el => {
            const spanLocate = el.classList.value
            if (resultJSON[spanLocate]) {
                el.innerText = resultJSON[spanLocate]
            }
        })
    }).catch(() => {
        resultArea.forEach(el => {
            el.innerText = ''
        })
        const zipCodeArea = document.querySelector('.cep')
        zipCodeArea.innerText = 'Não localizado'
    })
}

