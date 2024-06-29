// LASER GUN v2
pins.onPulsed(DigitalPin.P2, PulseValue.High, function () {
    music.setVolume(80)
    for (let index = 0; index < 3; index++) {
        if (isStill) {
            pins.digitalWritePin(DigitalPin.P13, 1)
            music.play(music.tonePlayable(988, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
            basic.pause(200)
            pins.digitalWritePin(DigitalPin.P13, 0)
            basic.pause(800)
        }
    }
    for (let index = 0; index < 1; index++) {
        if (isStill) {
            music.setVolume(100)
            music.play(music.tonePlayable(494, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
            pins.digitalWritePin(DigitalPin.P13, 1)
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P13, 0)
        } else {
            music.play(music.tonePlayable(131, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        }
    }
})
let isStill = false
basic.showIcon(IconNames.SmallHeart)
isStill = true
let strip2 = Connected.create(Connected.DigitalRJPin.W15, 8, Connected.NeoPixelMode.RGB)
strip2.setBrightness(2)
strip2.showColor(Connected.colors(Connected.NeoPixelColors.Green))
Kong.setLightMode(Kong.LightMode.OFF)
Kong.lightIntensity(0)
loops.everyInterval(500, function () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(100)
})
basic.forever(function () {
    if (Connected.PIR(Connected.DigitalRJPin.W1)) {
        isStill = false
        strip2.setBrightness(5)
        strip2.showColor(Connected.colors(Connected.NeoPixelColors.Red))
    } else {
        isStill = true
        strip2.setBrightness(2)
        strip2.showColor(Connected.colors(Connected.NeoPixelColors.White))
    }
    basic.pause(100)
})
