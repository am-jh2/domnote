<template>
    <div class="dn-content-wrapper">
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

<script>
export default {
    name: "PageComponent",

    props: {
    },

    emits: ['changePage'],

    mounted() {
    },

    computed: {
    }
};
</script>

<style scoped>
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