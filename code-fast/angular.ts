angular
constructor和ngOnInit的区别
constructor是ES6引入类的概念后新出现的东东，是类的自身属性，并不属于Angular的范畴，所以Angular没有办法控制constructor。constructor会在类生成实例时调用
ngOnInit用于在Angular第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
ngOnInit属于Angular生命周期的一部分，其在第一轮ngOnChanges完成之后调用，并且只调用一次：
constructor适用场景：
即使Angular定义了ngOnInit，constructor也有其用武之地，其主要作用是注入依赖，特别是在TypeScript开发Angular工程时，经常会遇到类似下面的代码：
ngOnInit适用场景：
ngOnInit纯粹是通知开发者组件/指令已经被初始化完成了，此时组件/指令上的属性绑定操作以及输入操作已经完成，也就是说在ngOnInit函数中我们已经能够操作组件/指令中被传入的数据了：
=========================================================================================================================================================
父子组件通讯
父子组件传递数据：@input  @output 通过组件属性结合这个对象（EventEmitter<any> = new EventEmitter()）
subscribe是Observable类下的一个函数。从Observable的中文名:”可观察的”就能看出，Observable的作用是可以起到类似监听的作用，但它的监听往往都是在跨页面中
订阅subscribe(next,error,complete)，取消unsubscribe()
