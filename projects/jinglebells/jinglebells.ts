let duration: number[] = []
let currentDuration = 0
let offset = 0
let notes: number[] = []
let currentNote = 0
let playMusic = false
input.buttonA.onEvent(ButtonEvent.Click, function () {
    playMusic = true
    offset = 0
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    stopPlaying()
})
function showRedGreenLights() {
    control.runInParallel(function () {
        if (offset % 8 == 0) {
            light.showRing(
                `green red green red green red green red green red`
            )
        }
        if (offset % 8 == 4) {
            light.showRing(
                `red green red green red green red green red green`
            )
        }
    })
}
function stopPlaying() {
    playMusic = false
    light.clear()
}
function playJingleBells() {
    currentNote = notes[offset]
    currentDuration = duration[offset]
    music.playTone(currentNote, currentDuration)
    showRedGreenLights()
    offset += 1
    if (offset == notes.length) {
        stopPlaying()
    }
}
playMusic = false
notes = [330, 330, 330, 330, 330, 330, 330, 392, 262, 294, 330, 349, 349, 349, 349, 349, 330, 330, 330, 330, 330, 294, 294, 330, 294, 392, 330, 330, 330, 330, 330, 330, 330, 392, 262, 294, 330, 349, 349, 349, 349, 349, 330, 330, 330, 330, 392, 392, 349, 294, 262]
duration = [music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Half), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Half), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter) + music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Whole), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter) + music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Half), music.beat(BeatFraction.Half), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Half), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Half), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter) + music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Whole), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Eighth), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Quarter), music.beat(BeatFraction.Whole)]
if (notes.length != duration.length) {
    console.log("notes and duration do not match")
}
forever(function () {
    if (playMusic == true) {
        playJingleBells()
    }
})
