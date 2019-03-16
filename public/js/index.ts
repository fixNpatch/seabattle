import {App} from "../../modules/app/public/app";

let render = function() {
    console.log("App started...")
    let app = new App()
    console.log("Initialization app...")
    app.init()
    console.log("Alright. You can use it completely")
};

document.addEventListener("DOMContentLoaded", render);