import { PLAY_MODE } from '../assets/js/constant'

const state = {
  sequenceList: [], // 顺序播放列表sequenceList
  playlist: [], // 正在播放的播放列表
  playing: false, // 是否正在播放
  playMode: PLAY_MODE.sequence, // 播放模式
  currentIndex: 0, // 当前播放索引
  fullScreen: false // 是否全屏播放
}

export default state
