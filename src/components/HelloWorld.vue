<template>
    <div>
        <p>{{ defaultText }}</p>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",

    props: {
        msg: {
            type: String,
            required: false
        }
    },

    mounted() {
        browser.runtime.sendMessage({});
    },

    computed: {
        defaultText() {
            if (this.msg) {
                return this.msg;
            }

            return 'Whattafuck';
            // return browser.i18n.getMessage("extName");
        }
    }
};
</script>

<style scoped>
p {
    font-size: 20px;
}
</style>
