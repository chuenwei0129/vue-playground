import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: {
    'update:modelValue': (() => true) as ((val: string) => boolean)
  },
  setup(props, ctx) {
    return () => <input
      value={props.modelValue}
      onInput={e => ctx.emit('update:modelValue', (e.target as any).value)}
    />;
  }
});
