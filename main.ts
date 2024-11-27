makerbit.connectLcd(39)
basic.forever(function () {
    makerbit.showStringOnLcd1602("Nivel --> " + sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    ), makerbit.position1602(LcdPosition1602.Pos1), 16)
    led.plotBarGraph(
    sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    ),
    170
    )
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    ) < 10) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
        servos.P2.setAngle(180)
        basic.pause(5000)
        servos.P2.setAngle(0)
    }
})
