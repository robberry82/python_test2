basic.showString("PWT7")
let x = 90
pins.servoWritePin(AnalogPin.P1, x)
while (true) {
    if (input.buttonIsPressed(Button.B)) {
        x = x + 1
        basic.pause(100)
        
    }
    
    if (input.buttonIsPressed(Button.A)) {
        x = x - 1
        basic.pause(100)
        
    }
    
    pins.servoWritePin(AnalogPin.P1, x)
}

