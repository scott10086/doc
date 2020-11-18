TS

====================================================================================添加到第一个元素（永久）
  this.genders.unshift({label: '请选择', value: ''});
==================================================================================== 去除第一个元素（永久） 
  this.genders.shift();
==================================================================================== 去除第一个元素（非永久）
  this.genders = genders.slice(1);
==================================================================================== 简单校验
'88888888': ['', [checkSpecialCharacter, Validators.maxLength(60), checkSpace]],
==================================================================================== 获取dom
import { ViewChild,ElementRef } from '@angular/core';
  @ViewChild('dt')
  dt: ElementRef;
==================================================================================== array移除重复元素
this.tableDataM.splice(this.tableDataM.findIndex(v => v.sysId === item.sysId), 1);
==================================================================================== 获取用户数据 
private userTool = new UisftechUserTool();
this.userTool.getUserInfo()['userName'];
==================================================================================== 深copy数据 
private extendTool = new UisftechTool();
this.extendTool.extend(true,{}, this.obj);
==================================================================================== 管道用法
{{key | list:'分隔符'}}
{{templateContent.custInfo?.cancelFlag | codeValuePie:cancelFlags :','}}
==================================================================================== 强制更新，防止抛错
private tabPanelCD: ChangeDetectorRef  //   强制更新，防止抛错
// 强制更新，防止抛错
ngAfterViewInit() {
  this.tabPanelCD.detectChanges();
}
==================================================================================== moment *****
import * as moment from 'moment';
==================================================================================== 打印form中无效的key
for (const [key,value] of Object.entries(this.keyForm.controls)) {
  if(!value.valid){
    console.log(key)
  }
}
==================================================================================== 管道
private datePipe: DatePipe,
this.datePipe.transform(this.dateTime, 'yyyy-MM-dd HH:mm:ss')
==================================================================================== 弹窗bug
 1.二级弹窗需要将 modal="modal" 删掉，否则弹窗的button函数绑定异常 
==================================================================================== 日期时间戳相互转化
Date.parse(new Date('2014-07-10 10:21:12'))
new Date(1517899823000)
Date.parse(new Date())
==================================================================================== promise对象
// 校验函数
checkCustName = (control: AbstractControl) => {
  if (control.errors) {
    return
  }
  const promise = new Promise<any>(
    (resolve, reject) => {
      if (this.selectCustNameFlag) {
        resolve(null);
      } else {
        resolve({ checkCustName: { errorMsg: '请从列表选择客户名称' } })
      }
    }
  );
  return promise;
}

// 异步请求
const p1 = this.basicHttpService.queryMenuListForTree({ systemId: this.systemId });
const p2 = this.basicHttpService.getMenuPathByMenuId({});
this.loadingShow = true;

Promise.all([p1.toPromise(), p2.toPromise()]).then((dataArray: [any, any]) => {
  this.loadingShow = false;
  // 解析菜单树接口返回数据
  const treeData = dataArray[0];
  // 解析获取父节点id接口数据
  const parentIdData = dataArray[1];
  const bodyData1 = this.basicHttpService.parseResponseMessage(treeData);
  const bodyData2 = this.basicHttpService.parseResponseMessage(parentIdData);
  if (!bodyData1 || !bodyData2) {
    this.basicsTool.messageServiceNew(this.messageService, { severity: 'error', summary: this.i18n_msgs.errorTitle, detail: this.i18n_msgs.errorMsg });
    return;
  }

  if (!bodyData1.errorMessage && !bodyData2.errorMessage) {
    this.parseMenuData(bodyData1.menuList, bodyData2.menuPathList);
  } else {
    this.basicsTool.messageServiceNew(this.messageService, { severity: 'error', summary: this.i18n_msgs.errorTitle, detail: bodyData1.errorMessage });
  }
}, error => {
  this.loadingShow = false;
  this.basicsTool.messageServiceNew(this.messageService, { severity: 'error', summary: this.i18n_msgs.errorTitle, detail: this.i18n_msgs.errorMsg });
});
==================================================================================== 获取本机IP
function getUserIP(onNewIP) { 
  //onNewIp - your listener function for new IPs       
  //compatibility for firefox and chrome
  const myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; 
  let pc = new myPeerConnection({ iceServers: [] }), noop = function () { }, localIPs = {}, ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g, key; function iterateIP(ip) { if (!localIPs[ip]) { onNewIP(ip); } localIPs[ip] = true; }
  // create a bogus data channel
  pc.createDataChannel('');
  // create offer and set local description
  pc.createOffer().then(function (sdp) { sdp.sdp.split('\n').forEach(function (line) { if (line.indexOf('candidate') < 0) { return; } line.match(ipRegex).forEach(iterateIP); }); pc.setLocalDescription(sdp, noop, noop); }).catch(function (reason) {
    // An error occurred, so handle the failure to connect
  });
  // sten for candidate events
  pc.onicecandidate = function (ice) { if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) { return; } ice.candidate.candidate.match(ipRegex).forEach(iterateIP); };
}
// Usage
getUserIP(function (ip) { alert('Got IP! :' + ip); });
==================================================================================== 路由跳转
        private router: Router
        this.router.navigate(['pages/customer-official/global-search'], {
            queryParams: {
                customInfo: this.ngForm.value
            }
        });

        private activateInfo: ActivatedRoute,
        if (this.activateInfo.queryParams['value'].customInfo) {
            this.inputValue = JSON.parse(this.activateInfo.queryParams['value'].customInfo);
            this.inputFlag = true;
            this.add(true);
        }
====================================================================================  加密解密
atob--get
btoa--set
==================================================================================== 
==================================================================================== 
==================================================================================== 
==================================================================================== 
==================================================================================== 

	
==================================================================================== 国际化 *****
import { TranslateService } from '@ngx-translate/core';
i18n_msgs: any = {};
private translate: TranslateService,	
const lang = this.translate.getDefaultLang(); // 'zh-CN'
this.translate.use(lang);
this.translate.get('basic').subscribe(data => {
    this.i18n_msgs.errorTitle = data.common['error-title'];
    this.i18n_msgs.successTitle = data.common['success-title'];
});
{{'basic.common.reset-btn' |translate }}    重置
{{'basic.common.query-btn' |translate }}    查询
==================================================================================== forEach
bodyData.forEach(element => {
    const item = { label: element.sysName, value: element.sysId };
    this.sysList.push(item);
});
==================================================================================== map
bodyData.map(element => {
    const item = { label: element.sysName, value: element.sysCode };
    return item;
});
==================================================================================== array移除指定元素
this.tableDataM.splice(this.tableDataM.findIndex(v => v.sysId === {{item.sysId}}), 1);
====================================================================================  判断
let a = [1, 2, 3, 4, 5];
// 所有元素是否都通过了指定函数的测试.
let b = a.every((item) => { return item > 0; }); // true
let c = a.every((item) => { return item > 1; }); // false
// 至少有一项元素通过了指定函数的测试.
let bb = a.some((item) => { return item > 4; }); // true
let cc = a.some((item) => { return item > 5; }); // false
// 判断---过滤
let dd = a.find((item) => { return item > 3; }); // 4
==================================================================================== 过滤
let array = [{ key: '1' },{ key: '6' }]
array.map(element => { return { label: element.key, value: element.key } });
array.filter(value => ['key1', 'key2'].includes(value['key']))
==================================================================================== 遍历数组
array.forEach(element => { });
for (const iterator of array) { }
==================================================================================== 遍历对象
let object = { key: 1 };
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];
  }
}
for (const [key, value] of Object.entries(object)) {
  if (key === 'key' && value) {
    const element = {};
    element[key] = value;
  }
}
====================================================================================  叠加
// array.reduce((previous, current, index, array) =>{
//   函数体
//   }, [initialValue])
let aaa = [5];
let s = aaa.reduce((prev, current) => {
  return prev + current;
}, 10);
console.log(s); // 15
let todos = [
  { id: 1, completed: true },
  { id: 2, completed: false },
  { id: 3, completed: true },
  { id: 4, completed: true },
  { id: 5, compelted: false }
];
const completedCount = todos.reduce((count, current) => {
  return current.completed ? count + 1 : count    // (0+1)  1 (1+1) (1+2) 3
}, 0);
console.log(completedCount);    // 3
const unCompleted = todos.reduce((count, current) => {
  return !current.completed ? count + 1 : count;   // 0 (0+1) 1 1 (1+1)
}, 0);
console.log(unCompleted);   // 2
let count = 0;
todos.map((item) => {
  if (item.completed) { count++; }
});
console.log(count); // 3
==================================================================================== array移除指定元素
this.tableDataM.splice(this.tableDataM.findIndex(v => v.sysId === item.sysId), 1);
==================================================================================== 连接数组
arr.concat(arr2,arr3)
==================================================================================== 数组去重操作
function unique (arr) {
  return Array.from(new Set(arr))
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr).toString())
==================================================================================== 动态值 bug
var a ={
  i:1,
  valueOf:function(){
    if(this.i===1){  
      this.i++;
      return 1;
    }else{
      return 12;
    }
  }
}
if(a==1&&a==12){
  console.log(a);
}
==================================================================================== 排序
// 冒泡排序
function bSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len-1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
         // 相邻元素两两对比，元素交换，大的元素交换到后面
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
  }
  return arr;
}

// 直接排序
function StraightInsertSort (arr) {
    var i, j, current, len;
    for (i = 1, len = arr.length; i < len; i++) {
        j = i - 1;
        current = arr[i];
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
// 希尔排序
function shellSort(array){
  var i,j,gap,temp;
  for(gap = parseInt(array.length/2);gap>0;gap=parseInt(gap/2)){
    for(i=gap;i<array.length;i++){
      temp = array[i];
      for(j=i;j>=gap&&temp<array[j-gap];j-=gap){
        array[j] = array[j-gap];
      }
      array[j] = temp;
    }
  }
  return array;
}                      
//举个数组
myArr = [20,18,27,19,35];
//使用函数
bSort(myArr);
StraightInsertSort(myArr);

==================================================================================== 排序
//冒泡排序
exports.bubbleSort = function (array){
  var i,j,temp;
  for(i=0;i<array.length-1;i++){
    for(j=0;j<array.length-i-1;j++){
      if(array[j]>array[j+1]){
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}
 
//简单选择排序
exports.selectSort = function (array){
  var i,j,pos,temp;
  for(i=0;i<array.length;i++){
    pos = i;
    for(j=i+1;j<array.length;j++){
      if(array[pos]>array[j]){
        pos = j;
      }
    }
    temp = array[i];
    array[i] = array[pos];
    array[pos] = temp;
  }
  return array;
}
 
//插入排序
exports.insertSort = function (array){
  var i,j,temp;
  for(i=0;i<array.length;i++){
    temp = array[i];
    for(j=i;j>0&&temp<array[j-1];j--){
      array[j] = array[j-1];
    }
    array[j] = temp;
  }
  return array;
}
 
//希尔排序
exports.shellSort = function (array){
  var i,j,gap,temp;
  for(gap = parseInt(array.length/2);gap>0;gap=parseInt(gap/2)){
    for(i=gap;i<array.length;i++){
      temp = array[i];
      for(j=i;j>=gap&&temp<array[j-gap];j-=gap){
        array[j] = array[j-gap];
      }
      array[j] = temp;
    }
  }
  return array;
}
 
//快速排序
exports.getQuickSortedArray = function (array){
  quickSort(array,0,array.length-1);
  return array;
}
 
function quickSort(array,left,right){
  var i,j,value;
  if(left<right){
    i=left,j=right,value=array[left];
    while(i<j){
        while(i<j&&array[j]>=value){//从右到左找到第一个比枢纽值小的
          j--;
        }
        if(i<j){
          array[i++]=array[j];
        }
        
        while(i<j&&array[i]<value){//从左到右边找到第一个不小于枢纽值的
          i++;
        }
        if(i<j){
          array[j--]=array[i];
        }
      }
      array[i] = value;
      quickSort(array, left, j-1);
      quickSort(array, i+1, right);
  }
}

