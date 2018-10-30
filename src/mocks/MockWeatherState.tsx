import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let state = {
    "dayIndex": 0,
    "hourIndex": 0,
    "hourOffset": 3,
    "city": "Quinebaug",
    "country": "US",
    "chartType": 0,
    "scale": "F°",
    "days": [{
        "weather": "wi-day-showers",
        "dow": 1,
        "hours": [{
            "time": 1540825200,
            "weather": "wi-day-showers",
            "temperature": 284.9,
            "humidity": 98,
            "precipitation": 0.2275,
            "wind": {"speed": 1.51, "deg": 230.002}
        }, {
            "time": 1540836000,
            "weather": "wi-day-showers",
            "temperature": 284.6,
            "humidity": 86,
            "precipitation": 0.22,
            "wind": {"speed": 2.57, "deg": 258.504}
        }, {
            "time": 1540846800,
            "weather": "wi-day-showers",
            "temperature": 284.21,
            "humidity": 77,
            "precipitation": 0.0099999999999998,
            "wind": {"speed": 2.91, "deg": 277.502}
        }, {
            "time": 1540857600,
            "weather": "wi-day-sunny",
            "temperature": 281.04,
            "humidity": 79,
            "precipitation": 0,
            "wind": {"speed": 2.92, "deg": 286.5}
        }, {
            "time": 1540868400,
            "weather": "wi-day-sunny",
            "temperature": 278.671,
            "humidity": 78,
            "precipitation": 0,
            "wind": {"speed": 2.72, "deg": 280}
        }, {
            "time": 1540879200,
            "weather": "wi-day-sunny",
            "temperature": 277.264,
            "humidity": 76,
            "precipitation": 0,
            "wind": {"speed": 2.46, "deg": 279.501}
        }, {
            "time": 1540890000,
            "weather": "wi-day-sunny",
            "temperature": 276.186,
            "humidity": 87,
            "precipitation": 0,
            "wind": {"speed": 2.49, "deg": 284.501}
        }, {
            "time": 1540900800,
            "weather": "wi-day-showers",
            "temperature": 275.764,
            "humidity": 85,
            "precipitation": 0.0050000000000003,
            "wind": {"speed": 2.69, "deg": 293.008}
        }],
        "hi": 284.9,
        "lo": 275.764
    }, {
        "weather": "wi-day-sunny",
        "dow": 2,
        "hours": [{
            "time": 1540911600,
            "weather": "wi-day-sunny",
            "temperature": 279.087,
            "humidity": 62,
            "precipitation": 0,
            "wind": {"speed": 3.62, "deg": 306.501}
        }, {
            "time": 1540922400,
            "weather": "wi-day-sunny",
            "temperature": 281.343,
            "humidity": 56,
            "precipitation": 0,
            "wind": {"speed": 3.68, "deg": 306.001}
        }, {
            "time": 1540933200,
            "weather": "wi-day-sunny",
            "temperature": 281.137,
            "humidity": 60,
            "precipitation": 0,
            "wind": {"speed": 2.83, "deg": 306.501}
        }, {
            "time": 1540944000,
            "weather": "wi-day-sunny",
            "temperature": 278.269,
            "humidity": 66,
            "precipitation": 0,
            "wind": {"speed": 2.42, "deg": 294.501}
        }, {
            "time": 1540954800,
            "weather": "wi-day-sunny",
            "temperature": 275.879,
            "humidity": 70,
            "precipitation": 0,
            "wind": {"speed": 1.97, "deg": 278.502}
        }, {
            "time": 1540965600,
            "weather": "wi-day-sunny",
            "temperature": 273.687,
            "humidity": 79,
            "precipitation": 0,
            "wind": {"speed": 1.01, "deg": 251.504}
        }, {
            "time": 1540976400,
            "weather": "wi-day-sunny",
            "temperature": 273.09,
            "humidity": 74,
            "precipitation": 0,
            "wind": {"speed": 1.86, "deg": 224.001}
        }, {
            "time": 1540987200,
            "weather": "wi-day-sunny",
            "temperature": 273.242,
            "humidity": 81,
            "precipitation": 0,
            "wind": {"speed": 1.37, "deg": 183.504}
        }],
        "hi": 281.343,
        "lo": 273.09
    }, {
        "weather": "wi-day-cloudy",
        "dow": 3,
        "hours": [{
            "time": 1540998000,
            "weather": "wi-day-cloudy",
            "temperature": 282.612,
            "humidity": 61,
            "precipitation": 0,
            "wind": {"speed": 1.86, "deg": 185.004}
        }, {
            "time": 1541008800,
            "weather": "wi-day-cloudy",
            "temperature": 286.901,
            "humidity": 66,
            "precipitation": 0,
            "wind": {"speed": 4.01, "deg": 198.5}
        }, {
            "time": 1541019600,
            "weather": "wi-day-sunny",
            "temperature": 287.007,
            "humidity": 73,
            "precipitation": 0,
            "wind": {"speed": 3.92, "deg": 211.001}
        }, {
            "time": 1541030400,
            "weather": "wi-day-showers",
            "temperature": 285.667,
            "humidity": 80,
            "precipitation": 0.035,
            "wind": {"speed": 3.21, "deg": 230}
        }, {
            "time": 1541041200,
            "weather": "wi-day-showers",
            "temperature": 285.043,
            "humidity": 86,
            "precipitation": 0.05,
            "wind": {"speed": 2.67, "deg": 239}
        }, {
            "time": 1541052000,
            "weather": "wi-day-sunny",
            "temperature": 283.865,
            "humidity": 94,
            "precipitation": 0,
            "wind": {"speed": 2.31, "deg": 237.001}
        }, {
            "time": 1541062800,
            "weather": "wi-day-cloudy",
            "temperature": 282.524,
            "humidity": 94,
            "precipitation": 0,
            "wind": {"speed": 1.81, "deg": 203.509}
        }, {
            "time": 1541073600,
            "weather": "wi-day-showers",
            "temperature": 283.464,
            "humidity": 95,
            "precipitation": 0.13,
            "wind": {"speed": 1.91, "deg": 193.501}
        }],
        "hi": 287.007,
        "lo": 282.524
    }, {
        "weather": "wi-day-rain",
        "dow": 4,
        "hours": [{
            "time": 1541084400,
            "weather": "wi-day-showers",
            "temperature": 288.092,
            "humidity": 84,
            "precipitation": 0.02,
            "wind": {"speed": 2.52, "deg": 190.004}
        }, {
            "time": 1541095200,
            "weather": "wi-day-cloudy",
            "temperature": 291.001,
            "humidity": 75,
            "precipitation": 0,
            "wind": {"speed": 3.92, "deg": 205.502}
        }, {
            "time": 1541106000,
            "weather": "wi-day-cloudy",
            "temperature": 290.45,
            "humidity": 74,
            "precipitation": 0,
            "wind": {"speed": 3.51, "deg": 224.501}
        }, {
            "time": 1541116800,
            "weather": "wi-day-cloudy",
            "temperature": 289.243,
            "humidity": 75,
            "precipitation": 0,
            "wind": {"speed": 3.12, "deg": 220.501}
        }, {
            "time": 1541127600,
            "weather": "wi-day-cloudy",
            "temperature": 288.428,
            "humidity": 80,
            "precipitation": 0,
            "wind": {"speed": 2.66, "deg": 203.5}
        }, {
            "time": 1541138400,
            "weather": "wi-day-showers",
            "temperature": 287.84,
            "humidity": 96,
            "precipitation": 0.56,
            "wind": {"speed": 2.26, "deg": 210.5}
        }, {
            "time": 1541149200,
            "weather": "wi-day-rain",
            "temperature": 287.463,
            "humidity": 99,
            "precipitation": 11.75,
            "wind": {"speed": 1.77, "deg": 153.001}
        }, {
            "time": 1541160000,
            "weather": "wi-day-sunny",
            "temperature": 287.25,
            "humidity": 100,
            "precipitation": 25.46,
            "wind": {"speed": 2.56, "deg": 91.0073}
        }],
        "hi": 291.001,
        "lo": 287.25
    }, {
        "weather": "wi-day-rain",
        "dow": 5,
        "hours": [{
            "time": 1541170800,
            "weather": "wi-day-rain",
            "temperature": 289.155,
            "humidity": 98,
            "precipitation": 5.52,
            "wind": {"speed": 3.24, "deg": 198.503}
        }, {
            "time": 1541181600,
            "weather": "wi-day-showers",
            "temperature": 292.067,
            "humidity": 88,
            "precipitation": 0.15,
            "wind": {"speed": 3.06, "deg": 225.005}
        }, {
            "time": 1541192400,
            "weather": "wi-day-showers",
            "temperature": 291.663,
            "humidity": 83,
            "precipitation": 0.020000000000003,
            "wind": {"speed": 2.56, "deg": 212.003}
        }, {
            "time": 1541203200,
            "weather": "wi-day-sunny",
            "temperature": 289.796,
            "humidity": 91,
            "precipitation": 0,
            "wind": {"speed": 2.46, "deg": 194.008}
        }, {
            "time": 1541214000,
            "weather": "wi-day-showers",
            "temperature": 289.339,
            "humidity": 91,
            "precipitation": 0.009999999999998,
            "wind": {"speed": 3.31, "deg": 183.501}
        }, {
            "time": 1541224800,
            "weather": "wi-day-showers",
            "temperature": 288.563,
            "humidity": 92,
            "precipitation": 0.050000000000004,
            "wind": {"speed": 3.48, "deg": 190.502}
        }, {
            "time": 1541235600,
            "weather": "wi-day-showers",
            "temperature": 288.082,
            "humidity": 97,
            "precipitation": 0.39,
            "wind": {"speed": 2.95, "deg": 189}
        }, {
            "time": 1541246400,
            "weather": "wi-day-showers",
            "temperature": 288.271,
            "humidity": 98,
            "precipitation": 0.31,
            "wind": {"speed": 2.59, "deg": 231.501}
        }],
        "hi": 292.067,
        "lo": 288.082
    }]
};
export const store = mockStore(state);
