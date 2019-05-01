import {$$} from "webix"
import * as webix from "webix";
import BasicComponent from "../../../../BasicComponent/BasicComponent";
import Handler from "../../../../handler/public/handler";


export default class CAuth extends BasicComponent {
	public handler: Handler;
	public ctx: any;

	public init():any{
		this.handler = new Handler();
		console.log("Init::Cauth")
	}

	public config():any {
		let that = this;
		console.log("cauth::config");
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
									webix.message("clicked");
									that.fetch()
								}
							},
						},
						{view: "button", value: "Cancel"}
					]
				}
			]
		}
	}

	public fetch():void{
		let data = ($$("login_form") as any).getValues();
		webix.message("fetched");
		this.ctx = {
			url: "/auth",
			data: data
		};
		let possibleResponse = JSON.parse(this.handler.sendSync(this.ctx)),
			sessionHash = possibleResponse["session_hash"];
		console.log("-------------");
		console.log("Session Hash:");
		console.log(sessionHash);
		console.log("-------------");
		localStorage.setItem("sessionHash", sessionHash)
		this.getAuth(localStorage.getItem("sessionHash"))
	}

	private getAuth(value:any):void {
		return
	}
}