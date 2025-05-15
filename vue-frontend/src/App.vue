<template>
  <div class="flex flex-col gap-10 items-center justify-center">
    <DiceWindow :die1="die1" :die2="die2" :die3="die3" :die4="die4" :die5="die5" :die6="die6" :isShaking="isRolling" />
    
    <div class="flex justify-between max-w-[600px] w-full">
      <Coefs 
        :coef="pairCoef" 
        :activePair="pairState" 
        :activeFullHouse="fullHouseState" 
        :activeYahtzee="yahtzeeState" 
        :activeThreePairs="threePairsState" 
        :activeOther="otherState" 
      />
      
      <div class="flex flex-col justify-between gap-10">
        <BetsInput 
          :disableButton="isButtonDisabled" 
          @submit="submitHandler" 
          @input-change="onChangeHandler" 
        />
        <Balance :balance="usersBalance" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DiceWindow from './components/DiceWindow.vue';
import Coefs from './components/Coefs.vue';
import BetsInput from './components/BetsInput.vue';
import Balance from './components/Balance.vue';

const die1 = ref(0);
const die2 = ref(0);
const die3 = ref(0);
const die4 = ref(0);
const die5 = ref(0);
const die6 = ref(0);

const pairState = ref(false);
const fullHouseState = ref(false);
const yahtzeeState = ref(false);
const threePairsState = ref(false);
const otherState = ref(false);

const pairCoef = ref(1);
const usersBalance = ref(0);
const usersInput = ref(0);
const isRolling = ref(false);
const isButtonDisabled = ref(false);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const resetCoefsHighlighting = () => {
  pairState.value = false;
  fullHouseState.value = false;
  yahtzeeState.value = false;
  threePairsState.value = false;
  otherState.value = false;
};

const initRequest = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/gambling/init', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    const data = await res.json();
    pairCoef.value = data.pair_coef;
  } catch (err) {
    console.error("Ошибка при initRequest:", err);
  }
};

const getBalanceRequest = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/gambling/balance');
    const data = await res.json();
    usersBalance.value = data.balance;
  } catch (err) {
    console.error("Ошибка при getBalanceRequest:", err);
  }
};

const gambleRequest = async (betValue) => {
  try {
    const res = await fetch('http://127.0.0.1:8000/gambling/roll_dices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: betValue, type: 'Bet' }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Ошибка при gambleRequest:", err);
  }
};

const submitHandler = async () => {
  isButtonDisabled.value = true;
  const response = await gambleRequest(usersInput.value);
  if (response && response.result) {
    isRolling.value = true;
    await delay(1000);
    isRolling.value = false;
    isButtonDisabled.value = false;

    await getBalanceRequest();

    [die1.value, die2.value, die3.value, die4.value, die5.value, die6.value] = response.rolls;

    resetCoefsHighlighting();

    switch (response.result) {
      case 'pair': pairState.value = true; break;
      case 'yathzee': yahtzeeState.value = true; break;
      case 'full_house': fullHouseState.value = true; break;
      case 'three_pairs': threePairsState.value = true; break;
      default: otherState.value = true;
    }
  } else {
    console.error("Ошибка: нет результата.");
    isButtonDisabled.value = false;
  }
};

const onChangeHandler = (value) => {
  usersInput.value = Number(value) * -1;
};

onMounted(async () => {
  await initRequest();
  await getBalanceRequest();
});
</script>
