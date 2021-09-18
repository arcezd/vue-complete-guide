const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Master Vue.JS',
      courseGoalB: '<bold>Learn more about Vue.JS</bold>',
      vueLink: 'https://v3.vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');