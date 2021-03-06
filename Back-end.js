[
    {
        "id": "fa7ca32a.fff29",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": ""
    },
    {
        "id": "6ec3287d.d0a778",
        "type": "rpi-sensehat in",
        "z": "fa7ca32a.fff29",
        "name": "",
        "motion": false,
        "env": true,
        "stick": false,
        "x": 240,
        "y": 240,
        "wires": [
            [
                "8ed816ca.a8a1b8",
                "44cdd5b0.e4280c",
                "cabe049f.098698",
                "953c1a32.8ab5d8"
            ]
        ]
    },
    {
        "id": "caa361ad.ab2b4",
        "type": "ui_gauge",
        "z": "fa7ca32a.fff29",
        "name": "",
        "group": "ae9303ff.f557e",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Temp",
        "label": "C",
        "format": "{{value | number:1}}",
        "min": 0,
        "max": "40",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 930,
        "y": 260,
        "wires": []
    },
    {
        "id": "8ed816ca.a8a1b8",
        "type": "function",
        "z": "fa7ca32a.fff29",
        "name": "Extract Temperature",
        "func": "var o = msg.payload;\nmsg.payload = o.temperature - 14;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 550,
        "y": 260,
        "wires": [
            [
                "caa361ad.ab2b4"
            ]
        ]
    },
    {
        "id": "44cdd5b0.e4280c",
        "type": "function",
        "z": "fa7ca32a.fff29",
        "name": "Extract Humidity",
        "func": "var o = msg.payload;\nmsg.payload = o.humidity;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 540,
        "y": 380,
        "wires": [
            [
                "4fce0192.e4806"
            ]
        ]
    },
    {
        "id": "cabe049f.098698",
        "type": "function",
        "z": "fa7ca32a.fff29",
        "name": "Extract Pressure",
        "func": "var o = msg.payload;\nmsg.payload = (o.pressure)/10; //for Kpa\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 550,
        "y": 500,
        "wires": [
            [
                "8e8d1308.d82b9"
            ]
        ]
    },
    {
        "id": "4fce0192.e4806",
        "type": "ui_gauge",
        "z": "fa7ca32a.fff29",
        "name": "",
        "group": "ae9303ff.f557e",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Humidity",
        "label": "C",
        "format": "{{value | number:1}} %",
        "min": 0,
        "max": "40",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 940,
        "y": 380,
        "wires": []
    },
    {
        "id": "8e8d1308.d82b9",
        "type": "ui_gauge",
        "z": "fa7ca32a.fff29",
        "name": "",
        "group": "ae9303ff.f557e",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Pressure",
        "label": "KPa",
        "format": "{{value | number:1}}",
        "min": 0,
        "max": "150",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 940,
        "y": 500,
        "wires": []
    },
    {
        "id": "953c1a32.8ab5d8",
        "type": "debug",
        "z": "fa7ca32a.fff29",
        "name": "Infos",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 900,
        "y": 60,
        "wires": []
    },
    {
        "id": "96b2e8b0.38e248",
        "type": "comment",
        "z": "fa7ca32a.fff29",
        "name": "Raspberry pi Sens HAT",
        "info": "",
        "x": 200,
        "y": 180,
        "wires": []
    },
    {
        "id": "ae9303ff.f557e",
        "type": "ui_group",
        "z": "",
        "name": "Younes's Home Information",
        "tab": "b5d9ecdf.37e0c",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "b5d9ecdf.37e0c",
        "type": "ui_tab",
        "z": "",
        "name": "Younes's Home Information",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]