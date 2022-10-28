<script setup lang="ts">
// import { storageDemo } from '~/logic/storage'

</script>

<script lang="ts">
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
                        Last updated
                    </div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">
                        <span class="length-limit">
                            www.dndbeyond.com/monster
                        </span>
                    </div>
                    <div class="xc-data">23</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">
                        <span class="length-limit">
                            www.dndbeyond.com/area
                        </span>
                    </div>
                    <div class="xc-data">55</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">
                        <span class="length-limit">
                            www.dndbeyond.com/boss
                        </span>
                    </div>
                    <div class="xc-data">55</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">
                        <span class="length-limit">
                            www.dndbeyond.com/oota/the-great-raid-of-the-missing-library-within-the-doomed-palace/page-1/section-32
                        </span>
                    </div>
                    <div class="xc-data">33</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
                <div class="xc-row" @click="$emit('changePage', 'notes')">
                    <div class="xc-data">
                        <span class="length-limit">
                            www.dndbeyond.com/mm
                        </span>
                    </div>
                    <div class="xc-data">33</div>
                    <div class="xc-data">2021-10-21 20:21</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* TABLE */
.xc-table {
    grid-template-columns: 1fr max-content max-content;
}
</style>