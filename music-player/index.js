import { createApp } from '../vue.esm-browser'

createApp({
  data() {
    return {
      btn_pre: '&#xe603;',
      btn_next: '&#xe602;',
      btn_stop: '&#xea81;',
      btn_play: '&#xea82;',
      message: 'Hello Vue!',
      isPlay: false,
      width:'0',
      nowTime:'',
      allTime:''
    }
  },
  methods: {
    next() {
      console.log('下一首')
    },
    onPre() {
      console.log('上一首')
    },
    timeFormat(tim){
      const second = String(parseInt(tim%60));
      const minute = String(parseInt(tim/60));
      return minute.padStart(2,'0')+":"+second.padStart(2,'0');
    }
  },
  mounted() {
    /**
     * 获取播放文件目录
     */
    const curMusic = this.$refs.music
    curMusic.onpause = () => {
      console.log('暂停')
    }
    curMusic.ontimeupdate = () => {
      this.width = String(curMusic.currentTime/curMusic.duration*100)+'%';
      this.nowTime = this.timeFormat(curMusic.currentTime);
      this.allTime = this.timeFormat(curMusic.duration);
    }
    curMusic.onplaying = (event) => {
      // console.log(event);
    }
  },
  watch:{
    isPlay:function(cur){
      if (cur) {
        this.$refs.music.play()
      }else {
        this.$refs.music.pause()
      }
    }
  }
}).mount('#app')
