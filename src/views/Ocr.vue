<template>
  <div>
    <div class="filebox primary">
      <label for="ex_file">명함업로드</label>
      <input id="ex_file" type="file" accept="image/*" ref="subFile" capture="camera" v-on:change="changeImg" />
    </div>
    <div class='resultDiv' v-if="result">
      {{ result }}
    </div>
    <div class="logs" v-if="logs">{{ logs }}</div>
    <div class="warning_contents">
      <span class="warning">※빛이 반사되지 않도록 촬영 부탁드리겠습니다.</span>
    </div>
  </div>
</template>

<script>
// import { PythonShell } from 'python-shell'
export default {
  data: () => {
    return {
      image: '',
      logs: '',
      result: '',
      file: '',
      fD: new FormData()
    }
  },
  methods: {
    changeImg () {
      const _this = this
      _this.file = this.$refs.subFile.files[0]
      _this.fD.append('fileList', _this.file)
      for (var key of _this.fD.entries()) {
        console.log(key[0] + ', ' + key[1])
      }
      _this.$http.post('http://api.byejoo.shop/irgo/getInvestorInfo',
        _this.fD,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          console.log(res)
        })
      /*
      const params = {
        filepath: e.target.value,
        name: e.target.files[0].name
      }
      this.$http.post('http://api.byejoo.shop/irgo/getInvestorInfo', params)
        .then((res) => {
          console.log(res)
        })
      */
      /*
      let Options = {
        mode: 'text',
        pythonPath: '',
        pythonOptions: ['-u'],
        scriptPath: '../utils',
        args: [e.target.value, e.target.files[0].name]
      }
      PythonShell.run('OCR.py', Options, function (err, results) {
        if (err) throw err
        console.log(results)
      })
      */
    }
  }
}
</script>

<style scoped>
  .warning_contents {
    margin-top: 20px;
  }
  .warning {
    color: red;
    font-weight: bold;
  }
  .resultDiv {
    margin-top: 20px;
  }
  .logs {
    margin-top: 20px;
  }
  .filebox label {
    display: inline-block;
    padding: .5em .75em; color: #999;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: .25em;
  }
  .filebox input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
  }
  .filebox.primary label {
    color: #fff;
    background-color: #f16514;
    border-color: #d16e34;
  }
</style>
