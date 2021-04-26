<template>
    <div class="container">
        <cart-header></cart-header>
        <cart-tab></cart-tab>
    </div>
</template>
<script>
import CartHeader from './components/CartHeader/index.vue'
import CartTab from './components/CartTab/index.vue'
export default{
    components:{CartHeader,CartTab}
}
</script>