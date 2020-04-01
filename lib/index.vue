<template>
  <div
    class="zr-title"
  >
    <div :class="['zr-title__left', sizeName]">
      <span
        v-if="$slots.title"
        class="zr-title__left-content"
      >
        <slot name="title"/>
      </span>
      <span
        v-else
        class="zr-title__left-content"
      >{{ title }}</span>
    </div>
    <div
      v-if="content || $slots.default"
      class="zr-title__right"
    >
      <div class="zr-title__right-content">
        <slot>{{ content }}</slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zr-title',

  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'large',
    },
  },

  computed: {
    sizeName() {
      return `zr-title--${this.size}`;
    },
  },
};
</script>
<style lang="scss">
@import './styles/variables.scss';
@import './styles/mixins.scss';

  @mixin before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    background-color: $--color-primary;
    transform: translateY(-50%);
  }
  .zr-title {
    padding-right: 23px;
    width: 100%;
    font-size: 16px;
    line-height: 1;
    border-bottom: 1px solid transparent;
    margin-top: 17px;
    @include clearfix;
  }
  .zr-title__left {
    position: relative;
    float: left;
    padding-left: 1.5em;
    vertical-align: middle;
  }

  .zr-title__left-content {
    white-space: nowrap;
    color: $--font-primary;
  }
  .zr-title__left:before {
    @include before;
    width: 3px;
    height: 22px;
    border-radius:10px;
    overflow: hidden;
    background-color: $--color-primary;
  }

  .zr-title__right {
    float: right;
    vertical-align: middle;
    text-align: right;
    font-size: initial;
  }
  .zr-title__right-content {
    display: inline-block;
    text-align: left;
  }
  .zr-title--large {
    font-size: 1em;
  }
  .zr-title--small {
    font-size: (14 / 16) em;
  }

  .zr-title--mini {
    font-size: (12 / 16) em;
  }
</style>
