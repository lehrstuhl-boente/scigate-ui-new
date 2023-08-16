<template>
  <div class="animation">
    <span>•</span>
    <span>•</span>
    <span>•</span>
  </div>
</template>

<style scoped>
.animation {
  font-size: 12px;
}

.animation span:nth-child(1) {
  animation: dot 0.6s alternate infinite;
}

.animation span:nth-child(2) {
  animation: dot 0.6s alternate infinite;
  animation-delay: 0.2s;
}

.animation span:nth-child(3) {
  animation: dot 0.6s alternate infinite;
  animation-delay: 0.4s;
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