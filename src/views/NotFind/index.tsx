import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  components: {},
  props: {},
  emits: [],
  setup(props, ctx) {
    const data = reactive({
      title: 404,
    })
    const method = reactive({})
    return {
      ...toRefs(data),
      ...toRefs(method),
    }
  },
  render() {
    const { title } = this
    return (
      <template>
        <div>{title}</div>
      </template>
    )
  },
})
