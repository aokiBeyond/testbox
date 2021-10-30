import { computed, defineComponent, reactive, readonly, toRefs } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {},
  props: {},
  emits: [],
  setup(props, ctx) {
    const { state } = useStore()
    const username = computed(() => readonly(state.username))
    const data = reactive({
      username,
    })
    return {
      ...toRefs(data),
    }
  },
  render() {
    const { username } = this
    return <div>欢迎:{username}</div>
  },
})
