// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let filePath = event.file;
  let pathResult = await cloud.getTempFileURL({
    fileList: [filePath]
  })//返回图片https连接
  let realFilePath = pathResult.fileList[0].tempFileURL;
  let ocrResult = await cloud.openapi.ocr.idcard({
    type: 'photo',
    imgUrl: encodeURIComponent(realFilePath)
  })
  // try {
  //   const result = await cloud.openapi.ocr.idcard({
  //     type: 'photo',
  //     imgUrl: encodeURIComponent(realFilePath)
  //   })
  //   console.log(result)
  //   return result
  // } catch (err) {
  //   console.log(666)
  //   console.log(err)
  //   return {err,a:"666"}
  // }
  return {
    filePath,
    pathResult,
    realFilePath,
    ocrResult
  }
}