<template>
  <router-view />
</template>

<script>
export default {
  name: 'app',
  created() {
      const html = document.documentElement // returns the html tag
      console.log(html);
      html.setAttribute('lang', 'es')
    }
}
</script>

<style>
</style>