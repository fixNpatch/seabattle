import * as webix from "webix";

export default class Handler {
	public data: any;

	public static init():void{
		console.log("Init::Handler")
	}

	public sendSync(ctx:any): any{
		let result:any;
		webix.ajax().sync().post(ctx.url, ctx.data, function (data:any){
			webix.message("success");
			webix.message(data);
			result = data
		});
		return result
	}

	public send(ctx:any): any{
		let result:any;
		webix.ajax().post(ctx.url, ctx.data, function (data:any){
			webix.message("success");
			webix.message(data);
			result = data
		});
		return result
	}
}