import { ref, reactive, computed, watch, watchEffect } from "vue";

export function useNumbers() {
  // * ref for single number or string value
  const count = ref(0);
  const a = ref(0);
  const b = ref(0);
  const history = ref([]);

  // * reactive for complex values
  const numbers = reactive({
    a: 0,
    b: 0,
  });

  const increase = (num) => {
    console.log(numbers);
    numbers[num] += 1;
  };

  const increment = () => {
    console.log(count);
    count.value += 1;
  };

  watch(numbers, (newVal, oldVal) => {
    console.log(newVal.a, newVal.b);
    console.log(oldVal.a, oldVal.b);
  });

  watch([a, b], ([newA, newB], [oldA, oldB]) => {
    if (newA !== oldA) {
      history.value.push(`a: ${oldA} -> ${newA}`);
    }
    if (newB !== oldB) {
      history.value.push(`b: ${oldB} -> ${newB}`);
    }
    console.log(newA, newB, oldA, oldB);
  });

  watchEffect(() => {
    console.log(numbers.b);
  });

  const total = computed(() => count.value + numbers.a + numbers.b);

  return {
    increment,
    increase,
    count,
    numbers,
    total,
    a,
    b,
    history,
  };
}
