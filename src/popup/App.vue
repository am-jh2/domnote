<template>
    <div class="container">
        <div class="dn-header">
            <template v-if="page == null">
                <h1>Domnote</h1>
                <div class="sub-header">
                    <h2>Simply the best note keeping app for browsers</h2>
                </div>
            </template>
            <template v-else-if="page == 'page'">
                <h1 class="clickable">www.dndbeyond.com</h1>
                <div class="sub-header">
                    <h2>32 pages</h2>
                </div>
            </template>
            <template v-else-if="page == 'notes'">
                <h1><span class="domain" @click="changePage('page')">www.dndbeyond.com</span><span class="url">/oota/monster/the-lich-king</span></h1>
                <div class="sub-header">
                    <h2>32 notes</h2>
                </div>
            </template>
        </div>

        <Domain v-if="page == null" @change-page="changePage" />
        <Page v-else-if="page == 'page'" @change-page="changePage" />
        <Note v-else-if="page == 'notes'" @change-page="changePage" />
    </div>
    <div class="TRASH REMOVE LATER" style="display:none;">
        popup page

        <input v-model="input" placeholder="Write stuff to store here">
        <button @click="storeData()">Save</button>
        <button @click="getData()">Get data</button>
        <button @click="clearData()">Clear data</button>

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
import Domain from "../components/DomainComponent.vue";
import Page from "../components/PageComponent.vue";
import Note from "../components/NoteComponent.vue";

export default {
    name: "Domnote",

    components: { Domain, Page, Note },

    data: () => ({
        input: "",
        dataa: { stuff: "eeer"},
        location: null,
        highlights: null,

        page: null
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
        },
        changePage(page){
            console.log("CHANGE PAGE FROM", this.page, "TO", page);
            this.page = page;
        },
        clearData() {
            console.log('clear data');
            chrome.storage.local.clear();
            chrome.storage.sync.clear();
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

<style scoped>
    .dn-header{
        width: 100%;
        height: max-content;
        border-bottom: 1px solid #ccc;
        padding: 1rem;
    }
    .dn-header h1{
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 1.25rem;
        font-weight: bold;
    }
    .dn-header h1 span.domain:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    .dn-header h1 span.url{
        color: #666;
    }
    .dn-header h2{
        color: #888;
        margin: 0;
        margin-top: 0.5rem;
        padding: 0;
        font-size: 1rem;
        font-weight: bold;
    }
    .sub-header{
        display: grid;
        grid-template-columns: max-content;
        column-gap: 1rem;
        place-content: center;
    }
</style>

<style>
    /* TABLE */
    .xc-table {
        display: grid;
        grid-template-columns: repeat(4, minmax(max-content, auto));
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        overflow: hidden;
    }
    .xc-table .xc-row {
        display: contents;
    }
    .xc-table .xc-row .xc-data {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border-top: 1px solid #eee;
        display: grid;
        place-items: center left;
    }
    .xc-table .xc-row.xc-header .xc-data {
        background: #e1e1e1;
        font-weight: bold;
        border-color: #c7c7c7;
    }
    .xc-table .xc-row:last-of-type .xc-data {
        border-bottom: 1px solid #eee;
    }
    .xc-table .xc-row:not(.xc-header):hover .xc-data {
        background: #eee;
    }
    .xc-table .xc-row .xc-data.actions {
        text-align: right;
        display: grid;
        grid-template-columns: max-content max-content max-content;
        column-gap: 1rem;
    }
    .xc-table .xc-row .xc-data.actions svg {
        margin-left: 5px;
    }
    .xc-table .xc-row .xc-data.actions svg:hover {
        cursor: pointer;
    }
</style>