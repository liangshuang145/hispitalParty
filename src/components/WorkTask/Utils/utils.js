/**
 * Created by wxl on 2019/4/24.
 */
// 时间格式转换 yyyy-mm-dd hh:mm:ss
const formatTime = dateString =>{
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

// 时间格式转换 yyyymmddhhmmss
const formatTime11111 = dateString =>{
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  var aa;
  var bb;
  var cc;
  var dd;
  var ee;
  if( month< 10){
     aa = '0'+month;
  }else{
    aa = month;
  }
  const day = date.getDate();
  if( day < 10){
     bb = '0'+day;
  }else{
    bb = day;
  }
  const hour = date.getHours();
  if( hour <10 ){
     cc ='0'+hour;
  }else {
    cc = hour;
  }
  const minute = date.getMinutes();
  if( minute <10){
     dd ='0'+minute;
  }else {
    dd = minute;
  }
  const second = date.getSeconds();
  if( second <10 ){
    ee ='0'+second;
  }else{
    ee=second;
  }
  return ""+year+aa+bb+cc+dd+ee+"";
  // return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};



// 获取富文本html内容中的第一张图片
const getFirstImageByContentHtml = contentHtml =>{
  let firstImage;
  let imgReg = /<img.*?(?:>|\/>)/gi;
  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  let arr = contentHtml.match(imgReg);  // arr 为包含所有img标签的数组
  if(!arr){// 该文本字段中无图片
    arr = [];
    return firstImage = ''
  }
  for (let i = 0; i < arr.length; i++) {
    let src = arr[i].match(srcReg);
    //获取图片地址

    let fdStart = src[1].indexOf("/");
    if (fdStart === 0) {
      firstImage = this.$BASE_URL + src[1]
      //表示src[1]是以/开头；
    } else if (fdStart === -1) {
      firstImage = src[1]
      //表示src[1]不是以/开头
    }
  }
  return firstImage;
};


//  yyyymmddhhmmss转换为时间格式转换
const formatTime111111111 = dateString =>{
  var date = new Date(1381442400000);
  var year = date.getFullYear();
  var month = date.getMonth()+1;

  var aa;
  var bb;
  var cc;
  var dd;
  var ee;
  if( month< 10){
    aa = '0'+month;
  }else{
    aa = month;
  }
  const day = date.getDate();
  if( day < 10){
    bb = '0'+day;
  }else{
    bb = day;
  }
  const hour = date.getHours();
  if( hour <10 ){
    cc ='0'+hour;
  }else {
    cc = hour;
  }
  const minute = date.getMinutes();
  if( minute <10){
    dd ='0'+minute;
  }else {
    dd = minute;
  }
  const second = date.getSeconds();
  if( second <10 ){
    ee ='0'+second;
  }else{
    ee=second;
  }
  return year+'-'+aa+'-'+bb+' '+cc+':'+dd+':'+ee+""
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n
};

//转换成简内容
const Convert  = dateString =>{
  var str = dateString.replace(/<\/?[^>]+>/gi, '')
  var stt = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
  return stt;
};

export default {
  formatTime: formatTime,
  getFirstImageByContentHtml:getFirstImageByContentHtml,
  formatTime11111: formatTime11111,
  formatTime111111111: formatTime111111111,
  Convert: Convert,
}
