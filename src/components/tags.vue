<template>
    <ul class="tags" v-if="tags.show">
        <li :class="['tag-li', isActive(item.path) ? 'active': '']" v-for="(item, index) in tags.list" >
            <router-link :to="item.path" class="tag-li-title">
                {{ 
                    item.title }}
            </router-link>
            <el-icon @click="closeTag(index)"><Close /></el-icon>
        </li>
    </ul>
</template>


<script lang="ts" setup>
import { onBeforeRouteUpdate, useRoute, useRouter} from 'vue-router'
import {
    RouteLocationNormalizedLoaded
} from 'vue-router'
import { useTagsStore } from '@/store/tags'
const route: RouteLocationNormalizedLoaded = useRoute();
const isActive = (path: string) => {
    return path === route.fullPath
}
const router = useRouter();
const tags = useTagsStore();
const setTags =(route: RouteLocationNormalizedLoaded) => {
    const isExist = tags.list.some(item => {
        return item.path === route.fullPath
    })
    if(!isExist) {
        if(tags.list.length > 8) tags.delTagsItem(0)
        tags.pushTagItem({
            name: route.name,
            title: route.meta.title,
            path: route.fullPath
        })
    }
}
setTags(route);
onBeforeRouteUpdate((to) => {
    setTags(to)
})
const closeTag = (index: number) => {
    // 关闭当前的index 标签 其实就是删除即可
    if(index == 0) return;
    tags.delTagsItem(index);
    // 同时让自己的router push到前一个或者'/' 首页即可
    const preItem = tags.list[index - 1];
    
    if(preItem) {
        router.push(preItem.path)
    }else {
        router.push('/dashboard') // 首页即可
    }
}
</script>


<stype lang="less" scoped>
.tags {
    position: relative;
    height: 30px;
    margin: 0px;
    padding: 0px;
    padding-left: 250px;
    
    box-sizing: border-box;
    width: 100%;
    background-color: #242f42;
    display: flex;
    list-style: none;
    .tag-li {
        color: white;
        padding: 5px;
        border-radius: 5px;
        background-color: red;
        display: flex;
        align-items: center;
        cursor: pointer;
        .tag-li-title {
            color: white;
            text-decoration: none;
        }
    }
}
</stype>