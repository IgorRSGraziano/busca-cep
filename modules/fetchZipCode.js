import ZipCodeValidator from "./zipCodeValidator.js"
export default function fetchZipCode() {
    const btn = document.querySelector('#search')

    btn.addEventListener('click', zipCodeValidation)

    async function zipCodeValidation(event) {
        event.preventDefault()

        const zipCodeSearch = new ZipCodeValidator(document.querySelector('#cep').value).validate()
        console.log(zipCodeSearch)
        const resultArea = document.querySelectorAll('.result span')


        try {
            const zipCodeAPI = await fetch(`https://viacep.com.br/ws/${zipCodeSearch}/json/`)

            const zipCodeJSON = await zipCodeAPI.json()
            resultArea.forEach(el => {
                const spanLocate = el.classList.value
                if (zipCodeJSON[spanLocate]) {
                    el.innerText = zipCodeJSON[spanLocate]
                }
            })
        } catch {
            resultArea.forEach(el => {
                el.innerText = ''
            })
            const zipCodeArea = document.querySelector('.cep')
            zipCodeArea.innerText = 'Não localizado'
        }
    }
}
