import "webix/webix.min.css"
import * as webix from "webix";
import BasicComponent from "../../BasicComponent/BasicComponent";
import Handler from "../../handler/public/handler";
import CAuth from "../../auth/public/js/cauth/cauth";


export class App extends BasicComponent{

	private Components: any;
	private Handler: any;
	private ctx: any;

	public init(){
		this.Handler = new Handler();
		this.Components = {
			Auth: new CAuth(),
		};

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
