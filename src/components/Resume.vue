<script>
import currencyFormater from '../helpers/currencyFormater';

export default {
  props: {
    label: {
        type: String,
        default: null
    },
    amount: {
        type: Number,
        default: null
    },
    totalAmount: Number,
    date:{
        type: String,
    }
  },
  computed:{
      visualAmount(){
          return this.amount ? this.amount : this.totalAmount;
      },
      visualLabel(){
          return this.label ? this.label : this.date
      },
      amountCurrency(){
          return currencyFormater.format(this.visualAmount);
      }
  }
};
</script>
<template>
  <main>
    <p>{{ visualLabel }}</p>
    <h1>{{ amountCurrency }}</h1>
    <div class="graphic">

        <slot name="graphic"></slot>
    </div>
    <div class="action">
        <slot name="action"></slot>
    </div>
  </main>
</template>


<style scoped lang="scss">
@use '../styles/variables' as *;

main {
  font-family: $font;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  h1, p {
    margin: 0;
    text-align: center;
  }
  h1 {
    margin-top: 14px;
    color: $brand-green;
  }
  .graphic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 48px 24px;
    box-sizing: border-box;
  }
}
</style>