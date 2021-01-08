<template>
<div>
  <OrderHeader/>
  cart
  <NavFooter/>
</div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader";
import NavFooter from "@/components/NavFooter";
export default {
  name: "cart",
  components: {NavFooter, OrderHeader}
}
</script>

<style scoped>

</style>