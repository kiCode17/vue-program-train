<template>
  <div class="singer-detail">
    <musicList
      :songs="songs"
      :pic="pic"
      :title="title"
      :loading="loading"
    >
    </musicList>
  </div>
</template>

<script>
  import { getSingerDetail } from '../service/singer'
  import { processSongs } from '../service/song'
  import musicList from '../components/music-list/music-list'
  import storage from 'good-storage'
  import { SINGER_KEY } from '../assets/js/constant'

  export default {
    name: 'singer-detail',
    components: {
      musicList
    },
    props: {
      singer: Object
    },
    data() {
      return {
        songs: [],
        loading: true
      }
    },
    computed: {
      computedSinger() {
        let ret = null
        const singer = this.singer
        if (singer) {
          ret = singer
        } else {
          const cachedSinger = storage.session.get(SINGER_KEY)
          if (cachedSinger && cachedSinger.mid === this.$route.params.id) {
            ret = cachedSinger
          }
        }
        return ret
      },
      pic() {
        const singer = this.computedSinger
        return singer && singer.pic
      },
      title() {
        const singer = this.computedSinger
        return singer && singer.name
      }
    },
    async created() {
      if (!this.computedSinger) {
        const path = this.$rout.matched[0].path
        this.$route.push({
          path: path
        })
        return
      }
      const result = await getSingerDetail(this.computedSinger)
      this.songs = await processSongs(result.songs)
      this.loading = false
      console.log('this.songs==', this.songs)
    }
  }
</script>

<style lang="scss" scoped>
  .singer-detail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>
