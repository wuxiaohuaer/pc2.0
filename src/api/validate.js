import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from './locale/zh_CN';//引入中文文件

// 配置中文

Validator.addLocale(zh)

Vue.use(VeeValidate, {
    locale: 'zh'
  })

Validator.extend('phone', {
messages: {
    zh: '请输入正确的手机或单位固话（格式：区号-电话）'
},
validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value) || /^(\d{3}-)(\d{8})$|^(\d{4}-)(\d{7})$|^(\d{4}-)(\d{8})$/.test(value)
}
})
Validator.extend('email', {
messages: {
    zh: '请输入正确邮箱地址'
},
validate: value => {
    return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(value)
}
})
const dict = {
zh: {
    custom: {
    email: {
        required: '邮箱不能为空' // messages can be strings as well.
    },
    phone: {
        required: '手机不能为空'
    },
    company: {
        required: '公司名称不能为空'
    },
    uname: {
        required: '联系人不能为空'
    },
    duty: {
        required: '职务信息不能为空'
    },
    code: {
        required: '验证码不能为空'
    }
    }
}
}

Validator.updateDictionary(dict)
  