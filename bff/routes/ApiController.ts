import {route,GET} from "awilix-koa";
@route("/api")
class ApiController{
    private testService
    constructor({testService}){
        this.testService = testService;
    }
    @route("/test")
    @GET()
    async actionIndex(ctx){
        const result = await this.testService.getData();
        console.log("🍬",result);
        ctx.body = {
            result 
        }
    }
}
export default ApiController;