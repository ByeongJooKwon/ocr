<template>
  <div id="app">
    <!-- :instant-upload == is create upload Button ?  -->
    <file-pond
      name="test"
      ref="pond"
      label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
      multiple="false"
      :server="serverOptions"
      accepted-file-types="image/jpeg, image/png"
      v-bind:files="myFiles"
    />
    <div v-if="returnResult">
      {{ returnResult }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)
export default {
  name: 'FilePondDemo',
  data: function () {
    return {
      myFiles: [],
      returnResult: '',
      test: 'asdf'
    }
  },
  components: {
    FilePond
  },
  computed: {
    serverOptions: function () {
      const _this = this
      return {
        url: 'http://upload.byejoo.shop/',
        withCredentials: false,
        process: {
          url: '/upload/',
          method: 'POST',
          withCredentials: false,
          headers: {},
          timeout: 5000,
          onload: (r) => {
            const params = {
              filepath: '/apec/public/files/',
              name: JSON.parse(r).file
            }
            axios.post('http://api.byejoo.shop/api/irgo/getInvestorInfo', params)
              .then((res) => {
                res.data[2] = res.data[2].replace(/\s*/gi, '')
                console.log(res)
                const name = /[ㄱ-힗]{2,3}/.exec(res.data[2])
                const email = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/.exec(res.data[2])
                const phone = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/.exec(res.data[2])
                _this.returnResult = `이름은 : ${name}
                 이메일은 : ${email}
                 핸드폰번호는 : ${phone}`
              })
            return JSON.parse(r)
          }
        }
      }
    }
  }
}
</script>

<style scoped></style>
