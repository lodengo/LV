import Vue from 'vue'
import Router from 'vue-router'

import InstallVue from '@/components/InstallVue'
import CreateProj from '@/components/CreateProj'
import HelloWorld from '@/components/HelloWorld.vue'
import ProjDir from '@/components/ProjDir.vue'
import LifeTime from '@/components/LifeTime.vue'
import DataBind from '../components/DataBind.vue'
import BindTest from '../components/BindTest.vue'
import Interpolation from '../components/Interpolation.vue'
import HomeWork from '../components/HomeWork.vue'
import AttrBind from '../components/AttrBind.vue'
import EventProc from '../components/EventProc.vue';
import FormBind from '../components/FormBind.vue';
import ConditionRender from "../components/ConditionRender.vue";
import ListRender from '../components/ListRender.vue'
import ReuseElement from '../components/ReuseElement.vue'
import VueConfig from '../components/VueConfig.vue';  
import UseSlot from '../components/UseSlot.vue';
import RouteDemo from '../components/RouteDemo.vue';
import StatusDemo from '../components/StatusDemo.vue';

Vue.use(Router)

export const routes = [
    {
        path: '/安装',        
        component: InstallVue
    },
    {
        path: '/创建项目',        
        component: CreateProj
    },
    {
        path: '/目录结构',
        component: ProjDir
    },
    {
        path: '/helloworld',        
        component: HelloWorld
    },
    {
        path: '/生命周期',
        component: LifeTime
    },
    {
        path: '/数据绑定',
        component: DataBind
    },
    {
        path: '/响应试验',
        component: BindTest
    },
    {
        path: '/插值',
        component: Interpolation       
    },
    {
        path: '/属性绑定',
        component: AttrBind
    },
    {
        path: '/条件渲染',
        component: ConditionRender
    },
    {
        path: '/列表渲染',
        component: ListRender
    },
    {
        path: '/事件处理',
        component: EventProc
    },
    {
        path: '/表单输入绑定',
        component: FormBind
    },
    {
        path: '/组件复用',
        component: ReuseElement
    },
    {
        path: '/插槽',
        component: UseSlot  
    },
    {
        path: '/路由',
        component: RouteDemo
    },
    {
        path: '/状态管理',
        component: StatusDemo
    },
    {
        path: '/全局-cli-配置',
        component: VueConfig
    },
    {
        path: '/作业',
        component: HomeWork
    }
];


export const router = new Router({
    routes
})