  new Vue({
    el:'#vue-app',
    data:{
      age:30,
      x:0,
      y:0，
      say:'hai',
      sayc:'acc'
    },
    methods: {
      add:function(ice){
        this.age +=ice;
      },
      js:function(dee){
        this.age -=dee;
      },
      updataXY:function(event){
        console.log(event);
      }
      say:function(message){
        alert(message);
      }
    }
  })
