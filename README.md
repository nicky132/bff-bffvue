# bff-bffvue
bff&amp;bffvue  

第一步:跑起来bffvue项目
# bffvue
  1.cnpm install   

  2.npm run serve  

  3.npm run build  

  生成dist文件  

第二步:copy前端页面静态资源dist到bffserver下  
# bffserver
  1.第一、创建views文件夹,将dist里index.html拷贝进来;  

    第二、创建assets文件夹,将dist里js、css、img文件夹拷贝进来;  

    第三、将favicon.ico文件拷贝到img里;  

    第四、将dist文件夹删除  

  2.cnpm install  

  3.ts-node app.ts  

  4.第一、访问localhost:3000,看到页面首页;  

    第二、访问localhost:3000/api/test,看到test接口返回数据;  

    第三、访问localhost:3000/home,看到页面首页,点击about看到about页面,点击test看到test页面