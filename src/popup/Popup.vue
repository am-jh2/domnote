<script setup lang="ts">
// import { storageDemo } from '~/logic/storage;

</script>

<template>
    <div class="dn-content-wrapper">
        <!-- <header-component /> -->
        <!-- <domain-component /> -->
        <!-- <note-component /> -->
        <div class="filter">
            <div class="total">5 pages</div>
            <input type="text" placeholder="Search...">
        </div>
        <div class="scrollable-content">
            <div class="xc-table">
                <div class="xc-row xc-header">
                    <div class="xc-data">
                        URL
                    </div>
                    <div class="xc-data">
                        Notes
                    </div>
                    <div class="xc-data">
                        Last accessed
                    </div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">www.dndbeyond.com/monster</div>
                    <div class="xc-data">23</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">www.dndbeyond.com/area</div>
                    <div class="xc-data">55</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">www.dndbeyond.com/boss</div>
                    <div class="xc-data">55</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">www.dndbeyond.com/oota</div>
                    <div class="xc-data">33</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">www.dndbeyond.com/mm</div>
                    <div class="xc-data">33</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.dn-content-wrapper {
    width: 100%;
    box-sizing: border-box;
}

.dn-content-wrapper .scrollable-content {
    overflow-y: scroll;
    max-height: 484px;
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

<style scoped>
/* TABLE */
.xc-table {
    grid-template-columns: repeat(3, minmax(max-content, auto));
}

.xc-table .xc-row:not(.xc-header):hover .xc-data {
    background: #eee;
    cursor: pointer;
}
</style>






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

<style scoped>
.dn-header {
    width: 100%;
    height: max-content;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
}

.dn-header h1 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    font-weight: bold;
}

.dn-header h1 span.domain:hover {
    cursor: pointer;
    text-decoration: underline;
}

.dn-header h1 span.url {
    color: #666;
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
