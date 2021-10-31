// import {route,GET} from "awilix-koa";
// @route("/")
// class IndexController{
//     private testService;
//     @GET()
//     async actionIndex(ctx){
//         ctx.body = {
//         }
//     }
// }
// export default IndexController;

import {route,GET} from "awilix-koa";
@route("/")
class IndexController{
    @GET()
    async actionIndex(ctx){
        ctx.body = await ctx.render("index");
    }
}
export default IndexController;