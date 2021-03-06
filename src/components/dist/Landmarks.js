"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Landmarks_module_css_1 = require("./Landmarks.module.css");
var ExitToApp_1 = require("@material-ui/icons/ExitToApp");
var LocationOn_1 = require("@material-ui/icons/LocationOn");
// const axios = require('axios');
function Roads(props) {
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState(""), village = _b[0], setVillage = _b[1];
    var _c = react_1.useState("school"), typeLandmark = _c[0], setTypeLandMark = _c[1];
    function delay(ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    }
    // function getPosition(){
    //     if(navigator.geolocation){
    //       navigator.geolocation.getCurrentPosition(async (position)=>
    //         {
    //         latitude=position.coords.latitude;
    //         longitude=position.coords.longitude;
    //     });
    //   };
    // };
    function handleChange(event) {
        if (event.target.name == "type") {
            setTypeLandMark(event.target.value);
        }
        else if (event.target.name == "village") {
            setVillage(event.target.value);
        }
        else {
            setName(event.target.value);
        }
    }
    function sendPostgresql(data) {
        var response = fetch('http://localhost:5000/storeLandmark', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        return response;
    }
    function sendNeo4j(data) {
        var response = fetch('http://localhost:5000/add_landmark', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        return response;
    }
    function handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function () {
            var latitude, longitude, temp, response_1, response_2, body_1, body_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        if (navigator.geolocation) {
                            console.log("hi");
                            navigator.geolocation.getCurrentPosition(function (position) {
                                latitude = position.coords.latitude;
                                longitude = position.coords.longitude;
                            });
                        }
                        ;
                        return [4 /*yield*/, delay(250)];
                    case 1:
                        _a.sent();
                        console.log(typeof (typeLandmark));
                        console.log(name);
                        temp = JSON.stringify({
                            landmark_type: typeLandmark,
                            landmark_name: name,
                            latitude: latitude,
                            longitude: longitude,
                            village: village
                        });
                        return [4 /*yield*/, sendPostgresql(temp)];
                    case 2:
                        response_1 = _a.sent();
                        return [4 /*yield*/, sendNeo4j(temp)];
                    case 3:
                        response_2 = _a.sent();
                        return [4 /*yield*/, response_1.text()];
                    case 4:
                        body_1 = _a.sent();
                        return [4 /*yield*/, response_2.text()];
                    case 5:
                        body_2 = _a.sent();
                        console.log('sent');
                        return [2 /*return*/];
                }
            });
        });
    }
    ;
    return (react_1["default"].createElement("div", { className: Landmarks_module_css_1["default"].Container },
        react_1["default"].createElement(ExitToApp_1["default"], { className: Landmarks_module_css_1["default"].back, style: { fontSize: "2vw" }, onClick: props.Back }),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("b", { className: Landmarks_module_css_1["default"].text }, "Please enter the details of the location"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", null, "Select Type of Landmark:"),
                react_1["default"].createElement("select", { name: "type", id: "cars", className: Landmarks_module_css_1["default"].selector, onChange: handleChange },
                    react_1["default"].createElement("option", { value: "school" }, "School"),
                    react_1["default"].createElement("option", { value: "hospital" }, "Hospital"),
                    react_1["default"].createElement("option", { value: "temple" }, "Temple"),
                    react_1["default"].createElement("option", { value: "mosque" }, "Mosque"),
                    react_1["default"].createElement("option", { value: "church" }, "Church"))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", null, "Village:"),
                react_1["default"].createElement("input", { name: "village", placeholder: "Village Name", onChange: handleChange })),
            react_1["default"].createElement("div", { className: Landmarks_module_css_1["default"].emailInputWrapper },
                react_1["default"].createElement("input", { className: Landmarks_module_css_1["default"].emailInput, name: "name", placeholder: "Name", onChange: handleChange }),
                react_1["default"].createElement("button", { type: "submit", className: Landmarks_module_css_1["default"].emailButton },
                    react_1["default"].createElement(LocationOn_1["default"], { className: Landmarks_module_css_1["default"].emailLogo }))))));
}
;
exports["default"] = Roads;
