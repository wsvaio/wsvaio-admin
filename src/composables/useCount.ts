import { ref } from "vue";

export default () => {
  const count = ref(0);

  return { count };
};
