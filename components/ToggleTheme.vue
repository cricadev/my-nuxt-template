<template>
  <div>
    <h1>Color mode: {{ $colorMode.value }}</h1>

    <UToggle
      icon-on="i-mdi-white-balance-sunny"
      icon-off="i-mdi-weather-night"
      :model-value="active"
      @update:model-value="toggle"
    />
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const active = ref(true);

const toggle = () => {
  active.value = !active.value;
  colorMode.preference = active.value ? "dark" : "light";
};

console.log(colorMode.preference);
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
