input.onButtonPressed(Button.A, function () {
    bitbot.bbSetServo(BBServos.P1, 90)
    nedtelling = 5
    sirkel()
    for (let index = 0; index < 5; index++) {
        basic.showNumber(nedtelling)
        basic.pause(1000)
        nedtelling += -1
    }
    bitbot.stop(BBStopMode.Coast)
    loftpenn()
    strek()
    senkpenn()
})
function sirkel () {
    bitbot.move(BBMotor.Left, BBDirection.Forward, 60)
    bitbot.move(BBMotor.Right, BBDirection.Forward, 20)
}
function strek () {
    bitbot.goms(BBDirection.Forward, 40, 2500)
}
function senkpenn () {
    bitbot.bbSetServo(BBServos.P1, 0)
}
function loftpenn () {
    bitbot.bbSetServo(BBServos.P1, 90)
}
let nedtelling = 0
bitbot.select_model(BBModel.XL)
let _90grader = 400
