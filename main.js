// hello vue
const app1 = new Vue({
  el: '#app1',
  data: {
    message: 'Hello Vue!',
  },
});

// v-text
const app2 = new Vue({
  el: '#app2',
  data: {
    message: 'Hello Vue!',
  },
});

// v-for
const app3 = new Vue({
  el: '#app3',
  data: {
    items: [
      { id: 1, text: '月曜日' },
      { id: 2, text: '火曜日' },
      { id: 3, text: '水曜日' },
      { id: 4, text: '木曜日' },
      { id: 5, text: '金曜日' },
    ],
  },
});

// v-if（v-else-if、v-else）
const app4 = new Vue({
  el: '#app4',
  data: {
    type: 'A',
  },
});

// v-on
// インラインイベントハンドラ
const app5 = new Vue({
  el: '#app5',
  data: {
    counter: 0,
  },
});

// メソッドイベントハンドラ
const app6 = new Vue({
  el: '#app6',
  data: {
    message: '',
  },
  methods: {
    viewMessage: function () {
      this.message = 'Hello Vue!';
    },
  },
});

// v-bind
const app7 = new Vue({
  el: '#app7',
  data: {
    isActive: true,
    hasError: false
  }
});

// v-show
const app8 = new Vue({
  el: '#app8',
  data: {
    ok: true,
  },
});
