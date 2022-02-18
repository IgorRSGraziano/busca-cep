export default class ZipCodeValidator {
    constructor(element) {
        this.element = element
    }
    clean() {
        return this.element.replace(/\D/g, '')
    }
    fix() {
        return this.clean().replace(/(\d{5})[- ./]?(\d{3})/g, '$1-$2')
    }
    validate() {
        return this.fix().substring(0, 9)
    }
}