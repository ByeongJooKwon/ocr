export default {
  getImgToTxt (state) {
    return state.result
  },
  setOCRresult (state, payload) {
    state.OCRreturnResult = payload
  },
  getOCRresult (state) {
    return state.OCRreturnResult
  }
}
