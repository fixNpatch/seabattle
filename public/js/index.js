
let render = function() {
    webix.ui({
        container: "form-place",
        view: "form",
        id: "login_form",
        width: 600,
        elements: [
            {view: "text", name: "login", label: "Login"},
            {view: "text", name: "password", type: "password", label: "Password"},
            {
                cols: [
                    {
                        view: "button",
                        value: "Login",
                        type: "form",
                        on:{
                           "onItemClick": function () {
                               let data = JSON.stringify($$("login_form").getValues());
                               webix.ajax().post("/auth", data, function () {
                                   webix.message("success");
                               })
                           }
                        },
                    },
                    {view: "button", value: "Cancel"}
                ]
            }
        ]
    });
    console.log("it's all good")

};




document.addEventListener("DOMContentLoaded", render);