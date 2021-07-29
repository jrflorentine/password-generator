input.onGesture(Gesture.Shake, function () {
    let list: number[] = []
    basic.showNumber(number[randint(0, list.length - 1)])
    basic.showString("" + (letter[randint(0, list.length - 1)]))
    basic.showString("" + (_symbol[randint(0, list.length - 1)]))
    basic.showNumber(number[randint(0, list.length - 1)])
    basic.showString("" + (letter[randint(0, list.length - 1)]))
    basic.showString("" + (_symbol[randint(0, list.length - 1)]))
})
let _symbol: string[] = []
let letter: string[] = []
let number: number[] = []
number = [
0,
1,
2,
3,
4,
5,
6,
7,
8,
9
]
letter = [
"a",
"b",
"c",
"d",
"e",
"z",
"y",
"x",
"w",
"v"
]
_symbol = [
"!",
"@",
"#",
"$",
"%"
]
