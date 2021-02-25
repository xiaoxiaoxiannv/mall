<template>
  <div>
    <router-view></router-view>
    <ServiceBar></ServiceBar>
    <NavFooter/>
  </div>
</template>

<script>
import NavFooter from "@/components/NavFooter";
import ServiceBar from "@/components/ServiceBar";

export default {
  name: "Order",
  data() {
    return {
      title: '',
      tip: ''
    }
  },
  components: {NavFooter, ServiceBar},
}
</script>

<style scoped>

</style>