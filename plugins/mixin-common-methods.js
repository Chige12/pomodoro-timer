import Vue from 'vue'

Vue.mixin({
  methods: {
    SecToTime: function(rawsec){
      var sec = String((rawsec % 60)%60)
      if (sec.length == 1){sec = "0" + sec}
      var min = String(Math.floor(rawsec / 60) % 60)
      if (min.length == 1){min = "0" + min}
      var hour = String(Math.floor(rawsec / 3600))
      if (hour.length == 1){hour = "0" + hour}
      var time = hour + ":" + min + ":" + sec
      return time
    },
  },
})