<template>
  <v-row justify="center" align="center" class="row">
    <v-col>
    <div class="wrapper">
      <div id="progress_bar"></div>
      <div class="ui">
        <p class="step">Step {{step}} {{nowStatus}}</p>
        <p class="time">{{ formatTime }}</p>
        <v-btn outlined large @click="start" v-if="!timerOn">START</v-btn>
        <v-btn outlined large @click="stop" v-if="timerOn">STOP</v-btn>
      </div>
    </div>
    <v-card outlined class="mt-4">
      <v-card-text v-if="timerOn">
        <span v-if="nowStatus === '集中時間'">{{taskTime / 60}}分の集中時間中です…</span>
        <span v-if="nowStatus === '休憩時間'">{{breakTime / 60}}分の休憩時間中です…</span>
      </v-card-text>
      <v-card-text v-if="!timerOn && !isFirstLoad">一時停止中です…</v-card-text>
      <v-card-text v-if="isFirstLoad">「START」を押して{{taskTime / 60}}分の集中時間を開始しましょう</v-card-text>
    </v-card>
    </v-col>
  </v-row>
</template>

<script>

import ProgressBar from 'progressbar.js'

export default {
  name: 'IndexPage',
  data() {
    return {
      taskTime: 30 * 60,
      breakTime: 10 * 60,
      sec: 30,
      step: 1,
      timerOn: false,
      timerObj: null,
      progressBar: null,
      isFirstLoad: true,
    };
  },
  mounted() {
    this.sec = this.taskTime
    const options = {
      color: '#3a3a3a',
      strokeWidth: 2,
    }
    this.progressBar = new ProgressBar.Circle('#progress_bar', options);
    this.progressBar.set(1)
  },
  computed: {
    formatTime() {
      return this.SecToTime(this.sec)
    },
    nowStatus() {
      const isBreak = this.step % 2 === 0
      return isBreak ? '休憩時間' : '集中時間'
    }
  },
  methods: {
    nextSec() {
      const isBreak = this.step % 2 === 0
      return isBreak ? this.breakTime : this.taskTime
    },
    count() {
      if(this.sec === 0){
        this.finish()
        return;
      }
      this.sec -= 1
      const nextSec = this.nextSec()
      this.progressBar.set(this.sec / nextSec)
    },
    start() {
      const self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true; 
      this.isFirstLoad = false;
    },
    stop() {
      // ここにタイムを保存する処理を書く
      clearInterval(this.timerObj);
      this.timerOn = false; 
    },
    reset() {
      this.sec = this.nextSec()
      clearInterval(this.timerObj);
      this.timerOn = false; 
    },
    finish() {
      this.step += 1
      this.reset()
      const isBreak = this.step % 2 === 0
      if (isBreak) {
        this.sec = this.breakTime
      } else {
        this.sec = this.taskTime
      }
      this.start()
    },
  },
}
</script>

<style scoped>
.row {
  height: 100%;
}
.wrapper {
  width: 100%;
  max-width: 100vh;
  position: relative;
}
.ui {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.step {
  font-size: 20px;
}
.time {
  font-size: 64px;
}
</style>
