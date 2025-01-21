import { type FunctionalComponent, h } from 'vue';
import { Child } from './Child';

export const Father: FunctionalComponent = () => {
  return h(
    Child,
    {
      foo: () => h('p', null, 'hello props'),
    },
    {
      header: ({ title }: { title: string }) => h('h1', null, title),
      footer: () => h('p', null, 'Footer slot content'),
    },
  );
};
