<template>
    <div class="container">
        <Header />
        <Home />
    </div>
    <div class="TRASH REMOVE LATER" style="display:none;">
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
    </div>
</template>

<script>
import Header from "../components/HeaderComponent.vue";
import Home from "../components/HomeComponent.vue";

export default {
    name: "Domnote",

    components: { Header, Home },

    data: () => ({
        input: "",
        dataa: { stuff: "eeer"},
        location: null,
        highlights: null
    }),

    created() {
        console.log("Created app");
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
body{
    margin: 0;
}
html {
    width: 700px;
    height: 500px;
    overflow: hidden;
}
.container{
    display:grid;
    grid-template-rows: max-content 1fr;
    height: 100vh;
}
</style>

<style>
    /* SCROLLBAR */

    /* width */
    .container ::-webkit-scrollbar {
        width: 0.5rem;
    }

    /* Track */
    .container ::-webkit-scrollbar-track {
        background: #eee;
    }

    /* Handle */
    .container ::-webkit-scrollbar-thumb {
        background: #666;
    }

    /* Handle on hover */
    .container ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
