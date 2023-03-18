input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
})
basic.showString("RGB")
let R = 500
let G = 500
let B = 500
let Rchange = 5
let Gchange = 19
let Bchange = 34
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        if (R >= 1024) {
            Rchange = Rchange * -1
        } else if (R <= 0) {
            Rchange = Rchange * -1
        }
        if (G >= 1024) {
            Gchange = Gchange * -1
        } else if (G <= 0) {
            Gchange = Gchange * -1
        }
        if (B >= 1024) {
            Bchange = Bchange * -1
        } else if (B <= 0) {
            Bchange = Bchange * -1
        }
        pins.analogWritePin(AnalogPin.P13, R)
        pins.analogWritePin(AnalogPin.P14, G)
        pins.analogWritePin(AnalogPin.P15, B)
        R += Rchange
        G += Gchange
        B += Bchange
    }
})
