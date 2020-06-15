Page({
  data: {
    name: 'luke',
    age: 18,
    students: [{
        id: 110,
        name: 'haha',
        age: 18
      },
      {
        id: 111,
        name: 'luke',
        age: 23
      },
    ],
    counter: 0
  },
  handleBtnClick() {
    //界面不刷新
    // console.log("按钮点击")
    // this.data.counter += 1
    // console.log(this.data.counter)

    //this.setData() 界面会刷新
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubClick(){
    this.setData({
      counter: this.data.counter -1
    })
  }
})

//编程范式
//1、命令式编程：原生操作DOM 对DOM进行操作
//2、声明式变成：比如vue对变量进行操作