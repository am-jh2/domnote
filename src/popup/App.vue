<template>
    <hello-world msg="Popup component" />
    popup page

    <input v-model="input" placeholder="Write stuff to store here">
    <button @click="storeData()">Save</button>
    <button @click="getData()">Get data</button>

    <hr>
    <span style="color:#f00;">_{{ dataa }}_</span>
    <span style="color:#000;">Highlights for domain {{ location }}: 
        <ul>
            <li v-for="highlight in highlights" :key="highlight">{{ highlight }}</li>
        </ul>
    </span>
</template>

<script>
import HelloWorld from "./../components/HelloWorld.vue";

export default {
    name: "App",

    components: { HelloWorld },

    data: () => ({
        input: "",
        dataa: { stuff: "eeer"},
        location: null,
        highlights: null
    }),

    created() {
        console.log("wegweg");
        this.getData();
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            this.location = tabs[0].url;
        });
        // this.location = window.location.host + window.location.pathname;
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

            chrome.storage.sync.get(this.location, (result) => {
                console.log('getLocation data', result);
                if (result) {
                    this.highlights = result[this.location].highlights;
                }
                console.log('this.highlights', this.highlights);
            });
        }
    }
};
</script>

<style>
html {
    width: 400px;
    height: 400px;
}
</style>
