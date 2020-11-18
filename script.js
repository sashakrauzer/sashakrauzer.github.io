let connectBtn = document.getElementById("connect");
let server = null;
let keyI = 0;
let characteristicWrite = null;
let writingTimeout = 0;

connectBtn.addEventListener("click", function () {
    navigator.bluetooth
        .requestDevice({
            acceptAllDevices: true,
            optionalServices: [
                dataTransferService.uuid,
                recipeInfoService.uuid,
                commandService.uuid,
                "battery_service",
                0x2a29,
                0x180a,
            ],
        })
        .then((device) => {
            console.log("Device", device);
            return device.gatt.connect();
        })
        .then((ser) => {
            console.log("Server", ser);
            server = ser;
            return server.getPrimaryService(dataTransferService.uuid);
        })
        .then((service) => {
            console.log("Service", service);
            return service.getCharacteristic(
                // dataTransferService.characteristics.controlTransmit.uuid
                "5cf052d4-2403-4719-a558-b7e72c48112f"
            );
        })
        .then((characteristic) => {
            // Reading Battery Level…
            return characteristic.startNotifications();
        })
        .then((characteristic) => {
            console.log("Notification control transmit", server);

            characteristic.addEventListener(
                "characteristicvaluechanged",
                handleNotifications
            );

            return server.getPrimaryService(dataTransferService.uuid);
            // return characteristic.readValue();
        })
        .then((service) => {
            return service.getCharacteristic(
                dataTransferService.characteristics.controlReceive.uuid
            );
        })
        .then((characteristic) => {
            let buffer = new ArrayBuffer(20);
            let msgKeyWord8 = 0x0a;
            let operationCode = 0xff;
            // let dataSize32 = 0x2334;
            let dataSize32 = recipeBinary.buffer.byteLength;
            let dataType16 = 0x6;

            new DataView(buffer).setInt8(0, msgKeyWord8, true);
            new DataView(buffer).setInt8(1, operationCode, true);
            new DataView(buffer).setInt32(2, dataSize32, true);
            new DataView(buffer).setInt16(6, dataType16, true);

            characteristic.writeValue(new Int8Array(buffer));
        })
        .catch((error) => {
            console.error(error);
        });
});

function handleNotifications(event) {
    console.log("Control Transmit", event.target.value.getUint8(0));
    let service = null;

    //
    server
        .getPrimaryService(dataTransferService.uuid)
        .then((ser) => {
            service = ser;
            return service.getCharacteristic(
                dataTransferService.characteristics.status.uuid
            );
        })
        .then((characteristic) => {
            return characteristic.startNotifications();
        })
        .then((characteristic) => {
            characteristic.oncharacteristicvaluechanged = handleStatusTransferData;
            console.log("prepare to sending data 2...");
            return service.getCharacteristic(
                dataTransferService.characteristics.dataReceive.uuid
            );
        })
        .then((characteristic) => {
            characteristicWrite = characteristic;
            console.log("prepare to sending data 3...");
            setTimeout(() => sendingData(), 2000);
            // sendingData();
        })
        .catch((error) => {
            // dispatch(showAppPreloader(false));
            console.log("prepare to sending data error: " + error);
        });
}

function handleStatusTransferData(value) {
    console.log("handleStatusTransferData", value.buffer);
    sendingData();
}

async function sendingData() {
    console.log("sendingData...");

    // let sum = 0;

    // let timeOut = new Promise

    // 1
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 2
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 3
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 4
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 5
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 6
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 7
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 8
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 9
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 10
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 11
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 12
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 13
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;
    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 14
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 15
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 16
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 17
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 18
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 19
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // 20
    await characteristicWrite.writeValue(
        recipeBinary.buffer.slice(keyI, keyI + 20)
    );
    keyI = keyI + 20;

    console.log("DataBuffer", recipeBinary.buffer.slice(keyI));

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, writingTimeout);
    });

    // let service = null;

    // server
    //     .getPrimaryService(dataTransferService.uuid)
    //     .then((ser) => {
    //         service = ser;
    //         return service.getCharacteristic(
    //             dataTransferService.characteristics.status.uuid
    //         );
    //     })
    //     .then((characteristic) => {
    //         return characteristic.readValue();
    //     })
    //     .then((value) => {
    //         handleStatusTransferData(value);
    //     })
    //     .catch((error) => {
    //         console.log("read status error: " + error);
    //     });

    // for (
    //     let sum = 0;
    //     keyI < recipeBinary.buffer.byteLength && sum < 400;
    //     keyI = keyI + 20, sum = sum + 20
    // ) {
    //     try {
    //         console.log(
    //             "recipeBinary await",
    //             recipeBinary.buffer.slice(keyI, keyI + 20)
    //         );

    //         await characteristicWrite.writeValue(
    //             recipeBinary.buffer.slice(keyI, keyI + 20)
    //         );
    //     } catch (e) {
    //         console.log("catch", e);
    //     }
    //     console.log("DataBuffer", recipeBinary.buffer.slice(keyI, keyI + 20));
    // }
}

const deviceInformationService = {
    name: "Device Information Service",
    uuid: 0x180a,
    description: "Exposes manufacturer and/or information about a device",
    characteristics: [
        {
            name: "Manufacturer Name String",
            uuid: 0x2a29,
            description: "Represent the name of the manufacturer of device",
            properties: ["read"],
        },
    ],
};

const batteryService = {
    name: "Battery Service",
    uuid: 0x180f,
    description:
        "Exposes the Battery Level of a single battery or set of batteries in a device",
    characteristics: [
        {
            name: "Battery Level",
            uuid: 0x2a19,
            description: "Represent level of the battery in a device",
            properties: ["read", "notify"],
        },
    ],
};

const dataTransferService = {
    name: "Data Transfer Service",
    uuid: "5cf052d0-2403-4719-a558-b7e72c48112f",
    description: "Provide data receive and transmitting of a data",
    characteristics: {
        dataReceive: {
            name: "Data Receive",
            uuid: "5cf052d1-2403-4719-a558-b7e72c48112f",
            description: "Receive data channel",
            properties: ["write"],
        },
        dataTransmit: {
            name: "Data Transmit",
            uuid: "5cf052d2-2403-4719-a558-b7e72c48112f",
            description: "Transmit data channel",
            properties: ["read", "notify"],
        },
        controlReceive: {
            name: "Control Receive",
            uuid: "5cf052d3-2403-4719-a558-b7e72c48112f",
            description: "Control data receive channel",
            properties: ["write"],
        },
        controlTransmit: {
            name: "Control Transmit",
            uuid: "5cf052d4-2403-4719-a558-b7e72c48112f",
            description: "Control data transmit channel",
            properties: ["read", "notify"],
        },
        status: {
            name: "Status",
            uuid: "5cf052d5-2403-4719-a558-b7e72c48112f",
            description: "Expose status of transfer data",
            properties: ["write", "read", "notify"],
        },
    },
};

const recipeInfoService = {
    name: "Recipe Info Service",
    uuid: "32dd23d0-d223-4462-34ad-434ec288113c",
    description: "",
    characteristics: {
        recipeListLowPart: {
            name: "Recipe List Low Part",
            uuid: "32dd23d1-d223-4462-34ad-434ec288113c",
            description: "Exporse first 5 slots of recipe list",
            properties: ["read", "notify"],
        },
        recipeListHighPart: {
            name: "Recipe List High Part",
            uuid: "32dd23d2-d223-4462-34ad-434ec288113c",
            description: "Exporse last 5 slots of recipe list",
            properties: ["read", "notify"],
        },
        recipeListSize: {
            name: "Recipe List Size",
            uuid: "32dd23d3-d223-4462-34ad-434ec288113c",
            description: "Exporse size of recipe list",
            properties: ["read"],
        },
    },
};

const commandService = {
    name: "Command Service",
    uuid: "dad54500-2ee3-6213-624a-aeca328f132a",
    description: "",
    characteristics: {
        command: {
            name: "Command",
            uuid: "dad54501-2ee3-6213-624a-aeca328f132a",
            description: "",
            properties: ["write"],
        },
        commandStatus: {
            name: "Command Status",
            uuid: "dad54502-2ee3-6213-624a-aeca328f132a",
            description: "",
            properties: ["notify"],
        },
    },
};

const base64ToArrayBuffer = (base64) => {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
};

let recipeBase64 =
    "AAYAAAAaAENyZWF0ZQAAAAAAAAAAAAAAAAAAQ3JlYXRlIHRleHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZpcnN0AAAAAAAAAAAAAABzZWNvbmQAAAAAAAAAAAAAbmV4dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmaXJzdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc2Vjb25kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGxhc3QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAABAAIAAwAEAAUAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADsAPAA9AD4APwBAAEEAQgBDAEQARQBGAEcASABJAEoASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wAAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AQACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8CAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADsAPAA9AD4APwBAAEEAQgBDAEQARQBGAEcASABJAEoASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wAAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AQACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8CAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wMDAAAAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADsAPAA9AD4APwBAAEEAQgBDAEQARQBGAEcASABJAEoASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wAAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AQACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8CAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wMEAAAAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAEgATABQAFQAWABcAGAAZABoAGwAcAB0AHgAfACAAIQAiACMAJAAlACYAJwAoACkAKgArACwALQAuAC8AMAAxADIAMwA0ADUANgA3ADgAOQA6ADsAPAA9AD4APwBAAEEAQgBDAEQARQBGAEcASABJAEoASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wAAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AQACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8CAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wM=";

let recipeBinary = {};
recipeBinary.buffer = base64ToArrayBuffer(recipeBase64);
