# EmployeeHealth
员工健康登记

原型图 -> 业务流程图 -> 需求文档



##### 上传图片

wx.chooseImage(API) //选择本地图片 ->

wx.cloud.uploadFile(云开发) //上传到云存储 ->

wx.cloud.callFunction(云开发) //传输给云函数,在云函数使用 ->

创建云函数文件夹getid ->

config.json -> 配置 permissions  ->

await cloud.getTempFileURL(云开发) //返回图片https连接 ->

cloud.openapi.ocr.idcard //ocr验证结果(需要在服务平台购买微信ocr接口)



