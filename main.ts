startbit.startbit_Init()
let 計數 = 0
let 步驟 = 0
startbit.startbit_digitaltube(startbit.startbit_digitaltubePort.port2, 7, 4)
basic.forever(function () {
    if (步驟 == 0) {
        if (startbit.startbit_avoidSensor(startbit.startbit_touchKeyPort.port1)) {
            步驟 = 1
        }
    } else {
        if (startbit.startbit_avoidSensor(startbit.startbit_touchKeyPort.port1)) {
            計數 += 1
            if (計數 > 9999) {
                步驟 = 1
            }
            步驟 = 0
        }
    }
    startbit.startbit_showNumber(計數)
})
