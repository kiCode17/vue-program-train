// currentSong - 当前播放歌曲的歌手
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
