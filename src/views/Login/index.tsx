import { ElButton, ElCol, ElForm, ElFormItem, ElIcon, ElInput, ElMessage, ElNotification, ElRow, messageTypes } from 'element-plus'
import { computed, defineComponent, reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { UserActionType } from '@/store/user/actionType'
export default defineComponent({
  components: {},
  props: {},
  emits: [],
  setup(props, ctx) {
    // Router对象 是全局对象的实例，其中包括对全局对象的操作， 例如路由跳转，导航守卫操作
    const router = useRouter()
    // 返回一个 route对象，表示当前路由信息，其中包括路由对象信息(name,meta,path)，路由携带的参数 params，query
    const { commit } = useStore()
    // 密码校验
    const checkPass = (rule:any,value:string,callback:Function) =>{
      if(!value){
        return callback('请输入密码')
      }
      else{
        console.log(value.trim().length)
        if(value.trim().length < 6){
          return callback('密码长度必须大于6位')
        }
        return callback()
      }
    }
    const nickName = '闪电风暴'
    //登录校验
    const loginView = ref<InstanceType<typeof ElForm>>()
    let btnLoad = ref<boolean>(false)
    const submitForm = () =>{
      btnLoad.value = true
      loginView.value?.validate( (valid:boolean|undefined)=>{
        if(valid){
          // 前面添加异步操作访问 查找登录信息
            setTimeout(() => {
              ElNotification({
                title:'登录成功',
                type:'success',
                message: `欢迎回来, ${nickName}`
              })
              btnLoad.value = false
            }, 2000);
        }else{
          ElMessage({
            showClose: true,
            message:'提交异常',
            type: 'warning'
          })
          btnLoad.value = false 
        }
      })
    }
    const data = reactive({
      title: '登录页',
      loginInfo:{
        username:'',
        userpass:''
      },
      loginRules:{
        username:[{require:true,message:'请输入用户名',trigger:'blur'}],
        userpass:[{validator: checkPass, trigger:'blur'}]
      },
      loginView
    })
    const method = reactive({
      routerGo,
      setUserName: computed((name) => commit(`${UserActionType.ACTION_SET_USERNAME}`, name)),
      submitForm
    })
    function routerGo(path: string) {
      router.push({
        name: path,
        params: {
          value: '路由参数',
        },
      })
    }
    
    // 如果是get请求可以使用query获取参数 ， 如果时post方式可以使用 params获取参数
    return {
      ...toRefs(data),
      ...toRefs(method),
      btnLoad
      
    }
  },
  render() {
    // const { title,loginInfo,loginRules } = this
    return (
      <div>
        <ElRow>
          <ElCol span={24}>
            <span>{this.title}</span>
          </ElCol>
        </ElRow>
        <ElRow>
          <ElCol span={6} offset={12}>
          <ElForm model={this.loginInfo} ref="loginView" labelPosition='left' labelWidth={60} rules={this.loginRules}>
              <ElFormItem label='用户名' prop="username" >
                <ElInput placeholder='请输入用户名' type='text' v-slots={{
                  prefix: ()=> <ElIcon class="el-icon-user"></ElIcon>}} v-model={this.loginInfo.username} >
                </ElInput>
              </ElFormItem>
              <ElFormItem label='密码' prop='userpass' >
                <ElInput placeholder='请输入密码' type='password' v-slots={{
                  prefix:()=> <ElIcon class="el-icon-unlock"></ElIcon>
                }} v-model={this.loginInfo.userpass} show-password></ElInput>
              </ElFormItem>
              <ElFormItem>
                <ElButton type='primary' loading={this.btnLoad} onClick={this.submitForm}>登录</ElButton>
                <ElButton type='default' >第三方登录</ElButton>
              </ElFormItem>
            </ElForm>
          </ElCol>
        </ElRow>
      </div>
    )
  },
})
