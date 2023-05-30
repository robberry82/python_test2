basic.show_string("PWT7")
x=90

pins.servo_write_pin(AnalogPin.P1, x)

while True:
    if input.button_is_pressed(Button.B):
        x=x+1
        basic.pause(100)
        pass

    if input.button_is_pressed(Button.A):
        x=x-1
        basic.pause(100)
        pass
    pins.servo_write_pin(AnalogPin.P1, x)          
pass