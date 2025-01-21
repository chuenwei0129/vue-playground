import { type FunctionalComponent, h } from 'vue';

export const Child: FunctionalComponent<{ foo: Function }> = (
  props,
  { slots },
) => {
  return h('div', null, [
    props.foo(),
    slots.header({ title: 'Header slot content' }),
    slots.default ? slots.default() : 'Default slot content',
    slots.footer(),
  ]);
};
