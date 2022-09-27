<template>
  <div>
    <div class="error" v-if="error">{{ error }}</div>
    <!-- <div class="error" v-show="error">{{ error }}</div> -->
    <div class="msg">
      <template v-if="result < 0">Отрицательный результат</template>
      <template v-else-if="result < 100">Результат меньше ста</template>
      <template v-else>Результат</template>

    </div>

    <div class="main">
      <input type="number" v-model.number="op1" name="op1">
      <input type="number" v-model.number="op2" name="op2">
      = {{ result }}<br/>
      <!-- fib = {{ fibResult }} -->
    </div>
    <div class="keyboard">
      <button
      v-for="operation of operations"
      @click="calculate(operation)"
      :name="operation"
      :key="operation">
      {{ operation }}
      </button>
    </div>
    <div class="logs">
      {{ logs }}
    </div>
    <button @click="counter++">{{ getCounter }}</button>

    <div class="keyboard">
      <input type="checkbox" v-model="showKeyBoard" name="keyboardShow" id="keyboardShow">
      <label for="keyboardShow">Отобразить экранную клавиатуру</label>
      <div v-if="showKeyBoard">
        <div style="display:flex; justify-content:center">
        <div v-for="n in 11" :key="n">
            <button v-if="n==11" v-on:click="selectedOperandIndicator(n)" :id="n">{{ "C" }}</button>
            <button v-else v-on:click="selectedOperandIndicator(n)" :id="n">{{ n-1 }}</button>
            </div>
          </div>

      <div class="radioBox">
        <input v-model="selectedOperand" type="radio" value="operand1" name="operands" id="operand1">
        <label for="operand1">Операнд1</label>
        <input v-model="selectedOperand" type="radio" value="operand2" name="operands" id="operand2">
        <label for="operand2">Операнд2</label>
        <!-- <div>{{ selectedOperand }}</div> -->
      </div>
    </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'CalcFunc',
  data: () => ({
    op1: 0,
    op2: 0,
    op: 0,
    result: 0,
    error: '',
    operations: ['+', '-', '/', '*', '^', 'trunc'],
    logs: {},
    fibResult: 0,
    counter: 0,
    showKeyBoard: false,
    n: 0,
    selectedOperand: 'operand1'
  }),
  methods: {
    // getCounter () {
    //   console.log('getCounter')
    //   return `Счетчик нажатий: ${this.counter}`
    // },
    calculate (operation) {
      this.error = ''
      switch (operation) {
        case '+': this.sum(); break
        case '-': this.sub(); break
        case '/': this.div(); break
        case '*': this.mult(); break
        case '^': this.pow(); break
        case 'trunc': this.trunc(); break
      }
      const { op1, op2, result } = this
      // this.logs[Date.now()] = `${op1} ${operation} ${op2} = ${result}`
      // this.logs = { ... this.logs, [Date.now()]: `${op1} ${operation} ${op2} = ${result}`}
      this.$set(this.logs, Date.now(), `${op1} ${operation} ${op2} = ${result}`)
    },
    sum () {
      const { op1, op2 } = this
      this.result = op1 + op2
      // this.fibResult = this.fib(op1) + this.fib(op2)
      // this.fibResult = this.fib1 + this.fib2
    },
    div () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя'
        return
      }
      this.result = op1 / op2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
    },
    mult () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    pow () {
      const { op1, op2 } = this
      this.result = Math.pow(op1, op2)
    },
    trunc () {
      const { op1, op2 } = this
      this.result = Math.trunc(op1 / op2)
    },
    fib (n) {
      console.log(n)
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2)
    },
    selectedOperandIndicator (n) {
      switch (this.selectedOperand) {
        case 'operand1': {
          this.op = this.op1
          this.keyboardClick(n); break
        }
        case 'operand2': {
          this.op = this.op2
          this.keyboardClick(n); break
        }
      }
    },
    keyboardClick (n) {
      if (n === 11) {
        this.op = String(this.op).slice(0, -1)
        if (this.op === '') {
          this.op = 0
        }
        this.op = Number(this.op)
      } else {
        if (this.op === 0 || this.op === '0') {
          this.op = String(n - 1)
          this.op = Number(this.op)
        } else {
          this.op = String(this.op) + String(n - 1)
          this.op = Number(this.op)
        }
      }
      if (this.selectedOperand === 'operand1') {
        this.op1 = this.op
      }
      if (this.selectedOperand === 'operand2') {
        this.op2 = this.op
      }
    }
  },
  computed: {
    // fib1 () {
    //   return this.fib(this.op1)
    // },
    // fib2 () {
    //   return this.fib(this.op2)
    // },
    getCounter () {
      console.log('getCounter')
      return `Счетчик нажатий: ${this.counter}`
    }
  }
}
</script>
