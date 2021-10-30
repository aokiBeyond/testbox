import { ElMenu, ElSubMenu } from 'element-plus'
import { defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
    props: {},
    emits: [],
    components: {},
    setup(props, ctx) {
        const data = reactive({})
        const method = reactive({})
        return {  
          ...toRefs(data),
          ...toRefs(method)
        }
    },
    render(){
        const {  } = this
        return(
            <div>
                <ElMenu 
                    backgroundColor='#545c64'
                    activeTextColor='#ffd04b'
                    textColor='#fff'
                    >
                </ElMenu>
            </div>
        )
    }
})