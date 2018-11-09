<template>

  <form
    name="contact"
    action=""
    method="post"
    netlify-honeypot="bot-field">
    <input
      type="hidden"
      name="form-name"
      value="contact" >
    <p style="display: none;">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>

    <div class="mb-3">
      <label
        for="name"
        class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4">Your name</label>
      <input
        v-validate="'required'"
        v-model="name"
        type="text"
        name="name"
        data-vv-name="name"
        class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple">
      <p
        v-show="errors.has('name')"
        class="bg-red white f7 w-100 pa2 fw8 db mv0">{{ errors.first('name') }}</p>
    </div>


    <div class="mb-3">
      <label
        for="email"
        class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4">Email</label>
      <input
        v-validate="'email|required'"
        type="text"
        data-vv-as="email"
        name="email"
        class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple ns:1/2">
      <p
        v-show="errors.has('email')"
        class="bg-red white f7 w-100 pa2 fw8 db mv0">{{ errors.first('email') }}</p>
    </div>


    <div class="mb-3">
      <label
        for="message"
        class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4">Message:</label>
      <textarea
        v-validate="'required'"
        name="message"
        data-vv-as="message"
        class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full h-32 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
        style="vertical-align: top;"/>
      <p
        v-show="errors.has('message')"
        class="bg-red white f7 w-100 pa2 fw8 db mv0">{{ errors.first('message') }}</p>
    </div>

    <div class="flex justify-end">
      <input
        class="shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
        type="submit"
        value="Submit"
        @click="submit">
    </div>

  </form>

</template>
<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },
  // name: "form",
  data() {
    return {
      name: '',
      email: '',
      select: null
    }
  },
  methods: {
    submit() {
      this.$validator.validateAll()
    },
    clear() {
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$validator.reset()
    }
  }
}
</script>
