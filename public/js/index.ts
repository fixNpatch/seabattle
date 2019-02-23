import CAuth from "../../modules/auth/public/js/cauth/cauth";
import "webix/webix.min.css"
import * as webix from "webix";

class App {

	private Components: any
	private Handler: any
	
	
	public init(){
		this.Components = {
			Auth: new CAuth()
		}

		// init components
		for(let component in this.Components){
			this.Components[component].init()
		}

		// init views
		for(let component in this.Components){
			webix.ui(this.Components[component].config())
		}
		
	}
}


let render = function() {
    let app = new App()
    app.init()
    console.log("it's all good")
};




document.addEventListener("DOMContentLoaded", render);