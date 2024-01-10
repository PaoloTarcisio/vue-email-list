const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: []
      }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((elem) => {
                    console.log(elem.data.response);
                    this.emails.push(elem.data.response);
                });
        }
    }
  }).mount('#app')

