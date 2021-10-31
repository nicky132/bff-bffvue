// import Koa from "koa";
// import {createContainer,Lifetime} from 'awilix';
// import {loadControllers,scopePerRequest} from 'awilix-koa';
// const app = new Koa();
// const container = createContainer();
// container.loadModules([__dirname + "/services/*.ts"],{
//     formatName:"camelCase",
//     resolverOptions:{
//         lifetime:Lifetime.SCOPED
//     }
// });
// app.use(scopePerRequest(container));
// app.use(loadControllers(__dirname + "/routes/*.ts"));
// app.listen(3000,()=>{
//     console.log("🍺服务启动成功")
// })

import Koa from "koa";
import * as render from "koa-swig";
import {createContainer,Lifetime} from 'awilix';
import {loadControllers,scopePerRequest} from 'awilix-koa';
import {join} from "path";
import * as co from "co";
import * as serve from "koa-static";
import { historyApiFallback } from 'koa2-connect-history-api-fallback';
const app = new Koa();

app.context.render = co.wrap(render({
    root: join(__dirname, 'views'),
    autoescape: true,
    cache: false,
    // cache: "memory",
    ext: 'html',
    writeBody: false
}));
app.use(serve('./views/assets'));

const container = createContainer();
app.use(historyApiFallback({ index: "/",whiteList: ['/api'] }));
container.loadModules([__dirname + "/services/*.ts"],{
    formatName:"camelCase",
    resolverOptions:{
        lifetime:Lifetime.SCOPED
    }
});
app.use(scopePerRequest(container));
app.use(loadControllers(__dirname + "/routes/*.ts"));
app.listen(3000,()=>{
    console.log("🍺服务启动成功")
})