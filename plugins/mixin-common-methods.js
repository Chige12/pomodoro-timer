import Vue from 'vue'

Vue.mixin({
  methods: {
    SecToTime: function(rawsec){
      let sec = String((rawsec % 60)%60)
      if (sec.length == 1){sec = "0" + sec}
      let min = String(Math.floor(rawsec / 60) % 60)
      if (min.length == 1){min = "0" + min}
      const time = min + ":" + sec
      return time
    },
  },
})