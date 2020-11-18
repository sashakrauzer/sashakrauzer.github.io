let connectBtn = document.getElementById("connect");

connectBtn.addEventListener("click", function (event) {
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
            return device.gatt.connect();
        })
        .then((server) => {
            return server.getPrimaryService("battery_service");
        })
        .then((service) => {
            return service.getCharacteristic("battery_level");
        })
        .then((characteristic) => {
            // Reading Battery Level…
            return characteristic.startNotifications();
        })
        .then((characteristic) => {
            characteristic.addEventListener(
                "characteristicvaluechanged",
                handleNotifications
            );
            return characteristic.readValue();
        })
        .then((value) => {
            console.log("read battery_level value: ", value.getUint8(0));
        })
        .catch((error) => {
            console.error(error);
        });
});

function handleNotifications(event) {
    console.log("battery_level", event.target.value.getUint8(0));
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
