<template>
    <div>
       <h1>{{title}}</h1>
       <button @click="randomTitle()">改变title</button>&nbsp;
       <button @click="destoryVm()">销毁实例</button>
       <p>
           <br>声明周期函数不要用箭头函数，this指向vm实例
           <img src="https://cn.vuejs.org/images/lifecycle.png"  alt="Vue 实例生命周期">
       </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "hello world"
        }
    },
    methods: {
        randomTitle(){
            this.title = 'Hello ' + ['china', 'world', 'universe'][Math.floor(Math.random()*2.999)];
        },
        destoryVm(){
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log('before create')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('before Mount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('before Update')
    },
    updated(){
        console.log('updated')
    },
    beforeDestroy(){
        console.log('before Destroy')
    },
    destroyed(){
        console.log('destroyed')
    }

}
</script>