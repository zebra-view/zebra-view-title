import Title from './index.vue';

Title.install = (Vue) => {
  Vue.component(Title.name, Title);
};

export default Title;
