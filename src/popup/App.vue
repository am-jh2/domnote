<template>
    <hello-world msg="Popup component" />
    popup page

    <input v-model="input" placeholder="Write stuff to store here">
    <button @click="storeData()">Save</button>
    <button @click="getData()">Get data</button>

    <hr>
    <span style="color:#f00;">_{{ dataa }}_</span>
</template>

<script>
import HelloWorld from "./../components/HelloWorld.vue";

export default {
    name: "App",

    components: { HelloWorld },

    data: () => ({
        input: "",
        dataa: { stuff: "eeer"}
    }),

    created() {
        console.log("wegweg");
        this.getData();
    },

    methods: {
        storeData(){
            console.log('storeData', this.input);
            chrome.storage.sync.set({ key: this.input }, function() {
                console.log('Value is set');
            });
            this.input = "";
        },
        getData(){
            chrome.storage.sync.get(['key'], (result) => {
                console.log('Data currently is ', result);
                this.dataa = result;
            });
        }
    }
};
</script>

<style>
html {
    width: 700px;
    height: 500px;
}
</style>
