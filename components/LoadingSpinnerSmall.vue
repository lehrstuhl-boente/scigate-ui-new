<template>
  <div class="animation">
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
</template>

<style scoped>
.animation span:nth-child(1) {
  animation: dot 0.9s alternate infinite;
}

.animation span:nth-child(2) {
  animation: dot 0.9s alternate infinite;
  animation-delay: 0.3s;
}

.animation span:nth-child(3) {
  animation: dot 0.9s alternate infinite;
  animation-delay: 0.6s;
}

@keyframes dot {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>