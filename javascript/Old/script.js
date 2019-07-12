winodow.onload

let cleanbtn = document.getElementById('cleanbtn')        
let backbtn = document.getElementById('backbtn')
let dividebtn = document.getElementById('dividebtn')
let n11 = document.getElementById('n11')
let n22 = document.getElementById('n22')
let n33 = document.getElementById('n33')
let multibtn = document.getElementById('multibtn')
let n44 = document.getElementById('n44')
let n55 = document.getElementById('n55')
let n66 = document.getElementById('n66')
let plusbtn = document.getElementById('plusbtn')
let n77 = document.getElementById('n77')
let n88 = document.getElementById('n88')
let n99 = document.getElementById('n99')
let minusbtn = document.getElementById('minusbtn')
let commabtn  = document.getElementById('commabtn')
let n00 = document.getElementById('n00')
let equalbtn  = document.getElementById('equalbtn')






class Calculator {
    constructor(previousOperandTextElment,currentOperandTextElment){
        this.previousOperandTextElment = previousOperandTextElment
        this.currentOperandTextElment = currentOperandTextElment
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }


    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }


    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }


    chooseOperation(operation){
        if(this.currentOperand === '' ) return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const currnet = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(currnet)) return

        switch(this.operation){
            case '+':
                computation = prev + currnet
                break
            case '-':
                computation = prev - currnet
                break

            case '*':
                computation = prev * currnet
                break

            case '/':
                computation = prev / currnet
                break

            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = '' 
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }

        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }

    updateDisplay(){
        
        this.currentOperandTextElment.innerText = 
            this.getDisplayNumber(this.currentOperand)

        if(this.operation != null){
            this.previousOperandTextElment.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else{
            this.previousOperandTextElment.innerText = ''
        }
    }


    enterUpdateDisplay() {
        this.currentOperandTextElment.innerText = this.currentOperand

        if (this.operation != null) {
            this.previousOperandTextElment.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElment.innerText = ''
        }
    }
}


function on_key_down() {
    var KKKKeyCode = event.keyCode;
    if( KKKKeyCode == 13 ){
        console.log("엔터키!!!")
        calculator.compute()
        calculator.updateDisplay()
    }
        
    // 숫자 1
    if(KKKKeyCode ==  49){
        calculator.appendNumber(n11.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  97){
        calculator.appendNumber(n11.innerText)
        calculator.updateDisplay()
    }

    // 숫자 2
    if(KKKKeyCode ==  50){
        calculator.appendNumber(n22.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  98){
        calculator.appendNumber(n22.innerText)
        calculator.updateDisplay()
    }
    
    // 숫자 3
    if(KKKKeyCode ==  51){
        calculator.appendNumber(n33.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  99){
        calculator.appendNumber(n33.innerText)
        calculator.updateDisplay()
    }

    // 숫자 4
    if(KKKKeyCode ==  52){
        calculator.appendNumber(n44.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  100){
        calculator.appendNumber(n44.innerText)
        calculator.updateDisplay()
    }

    // 숫자 5
    if(KKKKeyCode ==  53){
        calculator.appendNumber(n55.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  101){
        calculator.appendNumber(n55.innerText)
        calculator.updateDisplay()
    }

    // 숫자 6
    if(KKKKeyCode ==  54){
        calculator.appendNumber(n66.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  102){
        calculator.appendNumber(n66.innerText)
        calculator.updateDisplay()
    }

    // 숫자 7
    if(KKKKeyCode ==  55){
        calculator.appendNumber(n77.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  103){
        calculator.appendNumber(n77.innerText)
        calculator.updateDisplay()
    }

    // 숫자 8
    if(KKKKeyCode ==  56){
        calculator.appendNumber(n88.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  104){
        calculator.appendNumber(n88.innerText)
        calculator.updateDisplay()
    }

    // 숫자 9
    if(KKKKeyCode ==  57){
        calculator.appendNumber(n99.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  105){
        calculator.appendNumber(n99.innerText)
        calculator.updateDisplay()
    }

    // 숫자 0
    if(KKKKeyCode ==  48){
        calculator.appendNumber(n00.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  96){
        calculator.appendNumber(n00.innerText)
        calculator.updateDisplay()
    }

    // 콤마 .
    if(KKKKeyCode ==  190){
        calculator.appendNumber(commabtn.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  110){
        calculator.appendNumber(commabtn.innerText)
        calculator.updateDisplay()
    }

    // 연산 +
    if(KKKKeyCode ==  187){
        calculator.chooseOperation(plusbtn.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  107){
        calculator.chooseOperation(plusbtn.innerText)
        calculator.updateDisplay()
    }

    // 연산 -
    if(KKKKeyCode ==  189){
        calculator.chooseOperation(minusbtn.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  109){
        calculator.chooseOperation(minusbtn.innerText)
        calculator.updateDisplay()
    }

    // 연산 *
    // if(KKKKeyCode == 0000){
    //     calculator.chooseOperation(multibtn.innerText)
    //     calculator.updateDisplay()
    // }
    if(KKKKeyCode ==  106){
        calculator.chooseOperation(multibtn.innerText)
        calculator.updateDisplay()
    }

    // 연산 /
    if(KKKKeyCode ==  191){
        calculator.chooseOperation(dividebtn.innerText)
        calculator.updateDisplay()
    }
    if(KKKKeyCode ==  111){
        calculator.chooseOperation(dividebtn.innerText)
        calculator.updateDisplay()
    }

    // ESC
    if(KKKKeyCode ==  27){
        calculator.clear()
        calculator.updateDisplay()
    }

    if(KKKKeyCode ==  46){
        calculator.clear()
        calculator.updateDisplay()
    }

    // 백스페이스 , Del
    if(KKKKeyCode ==  8){
        calculator.delete()
        calculator.updateDisplay()
    }
    



}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElment = document.querySelector('[data-previous-operand]')
const currentOperandTextElment = document.querySelector('[data-current-operand]')
const calculator = new Calculator(previousOperandTextElment,currentOperandTextElment)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

 equalsButtons.addEventListener('click', button=>{
      calculator.compute()
      calculator.updateDisplay()
 })

allClearButtons.addEventListener('click', button=>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButtons.addEventListener('click', button=>{
    calculator.delete()
    calculator.updateDisplay()
})









