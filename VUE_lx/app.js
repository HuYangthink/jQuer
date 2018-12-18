  el:'#vue-app',
  data:{
    name:'迷失特胡',
    job:'web',
    website:'http://www.baidu.com',
    addac: '<a href="http://www.baidu.com">百度一下</a>'
  },
  methods:{

    greet:function(time){
      return "Good" +  time  + ' ' + this.name +"!"
    }
  }
})
