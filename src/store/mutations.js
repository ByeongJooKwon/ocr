export default {
  SET_IMGTOTXT (state, arrText) {
    let TxtNumber
    for (var val in arrText) {
      if (arrText[val].text.startsWith('010')) {
        if (arrText[val].text.length < 5) {
          TxtNumber = arrText[val].text + arrText[Number(val) + 1].text + arrText[Number(val) + 2].text
        } else {
          TxtNumber = arrText[val].text
        }
      } else if (arrText[val].text.indexOf('@') !== -1) {
        var TxtEmail = arrText[val].text
      } else {
        state.result = '빛이 반사되지 않도록 주의해서 다시 찍어주세요'
      }
    }
    state.result = `핸드폰 번호는 ${TxtNumber} 이고, 이메일 주소는 ${TxtEmail} 입니다.`
  }
}
