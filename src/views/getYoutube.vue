<template>
  <div class='composer'>
    <label for="basic-url">Your <span class='youtube'>YOUTUBE</span> URL</label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">공유하기주소</span>
      </div>
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="url" placeholder="youtube 영상주소 입력해주세요">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" v-on:click="getCont">{{ content }}</button>
      </div>
    </div>
    <div>
      채널이름: {{ chTitle }} <br>
      제목: {{ title }} <br>
      업로드날짜: {{ upload_date }} <br>
      썸네일 : <a v-bind:href="'https://youtu.be/'+ url">
                <img v-bind:src='thumbnail.url' v-bind:width="thumbnail.width" v-bind:height="thumbnail.height" v-bind:class="{'isMobile': isMobile}"/>
              </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      content: 'GETINFO',
      url: '',
      title: '',
      chTitle: '',
      thumbnail: '',
      upload_date: '',
      isMobile: false
    }
  },
  methods: {
    getCont () {
      const _this = this
      if (_this.url.indexOf('https://youtu.be/') !== -1) {
        _this.url = _this.url.replace('https://youtu.be/', '')
      }
      const baseURI = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${_this.url} &key=AIzaSyCexoo-7gtZ-8anR_KA7wap-oG9KQCGt2A`
      _this.$http.get(`${baseURI}`)
        .then((res) => {
          console.log(res.data.items[0].snippet)
          const requestData = res.data.items[0].snippet
          _this.chTitle = requestData.channelTitle
          _this.title = requestData.title
          _this.thumbnail = requestData.thumbnails.high
          _this.upload_date = requestData.publishedAt
        })
    }
  }
}
</script>

<style>
  .composer {
    width: 100%;
    text-align:center;
    margin: auto auto;
  }
  img.phone {
    width: 70%;
    height: auto;
  }
  .youtube {
    color: red;
    font-weight: bold;
  }
</style>
