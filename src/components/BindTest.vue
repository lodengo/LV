<template>
    <div>
        <h2>{{title}}</h2>
        <p>{{profile}}</p>
        <p>{{obj.profile}}</p>
        <button @click="toggle">toggle</button>
        <p>
            在created钩子函数中赋给data的profile没有在视图中显示
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: 'a vue app',
            obj:{} //$set 不能用于根节点data上
        }
    },
    created(){
        Object.assign(this.$data, {profile: 'this is a vue app'});
        console.log(this.$data);

        Object.assign(this.obj, {profile: 'this is a vue app 2'});
        // this.$set(this.obj, 'profile', 'this is a vue app 2');
        console.log('created', this.obj);
    },
    mounted(){
        Object.assign(this.obj, {profile: 'test app'});
        console.log('mounted', this.obj);
    },
    methods:{
        toggle(){
            Object.assign(this.obj, {profile: 'toggle test'});
            console.log('toggle', this.obj);
        }
    }
}
</script>