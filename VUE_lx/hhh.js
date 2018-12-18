new Vue({
  el:'#vue-app',
  data:{
    x:0,
    y:0
  },
  methods:{
    updateXY:function(event){
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    stopMoving:function(event){
      event.stopPropagation();
    }
  }
});
new Vue({
  el:'#acc-app',
  data:{
    name:'hello',
    age:''

  },
  methods: {
    logName:function(){
      // console.log('正在输入你的名字');
      //
      // this.name = this.$refs.name.value;

    },
    logAge:function(){
      // console.log('正在输入你的年龄');
    }

    }

});

new Vue({
  el:'#pp',
  data:{
    a:0,
    b:0,
    age:20
  },
  methods: {
    addToA:function(){
      return  this.a+this.age;
    },
    addToB:function(){
        return  this.b+this.age;
    }
  },
  computed:{

  }
});

new Vue({
  el:'#vue-a',
  data:{
    changeColor:false,
    changeLength:false
  },
  methods:{

  },
  computed:{
      compClasses:function(){
        return{
           changeColor:this.changeColor,
           changeLength:this.changeLength
        }
      }
  }
})
