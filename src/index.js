import Embeddable from './embeddable.vue';

const install = function (Vue) {
  Vue.component(Embeddable.name, Embeddable);
};

Embeddable.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {install, Embeddable};
