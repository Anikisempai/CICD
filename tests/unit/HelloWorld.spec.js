import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('it should render the props correctly', () => {
    const msg = 'coucou';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
