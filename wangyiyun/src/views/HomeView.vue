<template>
<div>
  <TopNav/>
  <TopSwiper/>
  <IconList/>
  <MusicList/>
</div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue'
import TopSwiper from '@/components/home/TopSwiper.vue'
import IconList from '@/components/home/IconList.vue';
import MusicList from '@/components/home/MusicList.vue';


export default {
  name: 'HomeView',
  components: {
    TopNav,
    TopSwiper,
    IconList,
    MusicList
}
}
</script>
