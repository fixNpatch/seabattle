import {$$} from "webix"
import * as webix from "webix";


export default class CAuth {

	public init(){
		console.log("Init::Cauth")
	}

	public config():any {
		return {
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
									let data = JSON.stringify(($$("login_form") as any).getValues());
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
		}
	}

	public func(s:string):any{
		webix.message("hello, weorl");
		webix.ui({
			view: "button",
			id: "text",
			label: "kek",
		});
		console.log("C_AUTH");
		return s
	}
}