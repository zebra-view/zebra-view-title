import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Link from 'package/link';

describe('Link', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Link, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
