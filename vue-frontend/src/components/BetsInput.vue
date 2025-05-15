<template>
  <div class="bets-input-container">
    <h2 class="bets-input-title">Bet</h2>
    <div class="bets-input-controls">
      <input
        class="bets-input-field"
        @input="onInputChange"
      />
      <button
        :disabled="disableButton"
        class="bets-input-button"
        :class="{ 'button-disabled': disableButton }"
        @click="$emit('submit')"
      >
        ROLL
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  disableButton: Boolean
});

const emit = defineEmits(['submit', 'input-change']);

function onInputChange(event) {
  emit('input-change', event.target.value);
}
</script>

<style scoped>
.bets-input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 280px;
  width: 100%;
  padding: 2rem 1rem; /* py-8 px-4 converted */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* shadow-xl approximation */
  border-radius: 0.25rem; /* rounded-md approximation */
  border: 1px solid #e5e7eb; /* border-1 border-solid border-gray-100 approximation */
}

.bets-input-title {
  font-size: 1.5rem; /* text-2xl approximation */
  font-weight: bold; /* font-bold */
  margin: 0.5rem 0; /* m-2 converted */
}

.bets-input-controls {
  display: flex;
  justify-content: space-between;
  width: 155px;
  margin-left: 1rem; /* ml-4 converted */
}

.bets-input-field {
  border: 2px solid black;
  border-radius: 0.25rem;
  width: 60px;
  height: 40px;
  background: linear-gradient(to bottom, #e0e0e0, white); /* bg-gradient-to-b from-gray-300 to-white approximation */
  text-align: center;
  font-size: 1rem; /* text-lg approximation */
  font-weight: bold;
  color: #4b5563; /* text-gray-800 approximation */
}

.bets-input-button {
  border: 2px solid black;
  border-radius: 0.25rem;
  width: 80px;
  height: 40px;
  color: black;
  font-weight: bold;
  background: linear-gradient(to bottom, white, #fca5a5); /* bg-gradient-to-b from-white to-red-300 approximation */
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.bets-input-button:hover:not(.button-disabled) {
  background: linear-gradient(to bottom, white, #f87171); /* hover:to-red-500 approximation */
}

.bets-input-button.button-disabled {
  background-color: #4a5568; /* bg-gray-900 approximation */
  cursor: not-allowed; /* cursor-not-allowed */
}

.bets-input-button {
  border: 2px solid black;
  border-radius: 0.25rem;
  width: 80px;
  height: 40px;
  color: black;
  font-weight: bold;
  background: linear-gradient(to bottom, white, #fca5a5); /* bg-gradient-to-b from-white to-red-300 approximation */
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

/* Изменение фона при блокировке кнопки */
.bets-input-button.button-disabled {
  background: #4a5568 !important; /* bg-gray-900 approximation */
  cursor: not-allowed !important; /* cursor-not-allowed */
}

/* Дополнительно: при наведении на заблокированную кнопку, не меняем цвет */
.bets-input-button.button-disabled:hover {
  background: #4a5568 !important;
}
</style>