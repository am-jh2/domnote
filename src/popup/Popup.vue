<script setup lang="ts">
// import { storageDemo } from '~/logic/storage'
</script>

<script lang="ts">
export default {
    name: "Popup",

    props: {
    },

    data: () => ({
        popupView: 'note'
    }),

    emits: [],

    mounted() {
    },

    methods: {
        changePage(page: string){
            console.log("ChangePage", page);
            this.popupView = page;
        }
    }
};
</script>

<template>
    <div class="dn-content-wrapper">
        <header-component :popupView="popupView" @changePage="changePage" />
        <page-component v-if="popupView == 'page'" />
        <domain-component v-if="popupView == 'domain'" />
        <note-component v-if="popupView == 'note'" />
    </div>
</template>

<style>
body {
    margin: 0;
}

html {
    width: 700px;
    height: 500px;
    overflow: hidden;
}

.container {
    display: grid;
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

<style>
.dn-header {
    width: 100%;
    height: max-content;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
}

.dn-header h2 {
    color: #888;
    margin: 0;
    margin-top: 0.5rem;
    padding: 0;
    font-size: 1rem;
    font-weight: bold;
}

.sub-header {
    display: grid;
    grid-template-columns: max-content;
    column-gap: 1rem;
    place-content: center;
}

.filter {
    background: #e1e1e1;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;

    display: grid;
    grid-template-columns: max-content max-content;
    place-items: center;
    place-content: space-between;
}

.filter input {
    border: 1px solid #888;
    border-radius: 5px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
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
