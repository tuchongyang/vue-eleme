<template>
    <div class="tab-bar border-bottom-1px">
        <div class="tab" :class="{tab_active: index==tab}" v-for="(item,index) in tabs" :key="index" @click="select(index)">
            <div>{{item}}</div>
        </div>
        <div class="tab-bar-slider" :style="{width: '33.333333%', left: tab*33.333333+'%'}"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tab: 0,
            tabs:['商品','评论','商家']
        }
    },
    methods:{
        select(i){
            this.tab = i
        }
    }
}
</script>
<style lang="scss" scoped>
.tab-bar{
    display: flex;
    position: relative;
    .tab{
        flex: 1;
        text-align: center;
        line-height: 40px;
    }
    .tab-bar-slider{
        position: absolute;
        height: 2px;
        background:red;
        bottom: 0;
        transition: left .3s;
    }
}
</style>