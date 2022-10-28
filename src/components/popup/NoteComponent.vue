<script setup lang="ts">
// import { storageDemo } from '~/logic/storage'

</script>

<script lang="ts">
export default {
    name: "NoteComponent",

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
            <div class="total">1337 notes</div>
            <input type="text" placeholder="Search...">
        </div>
        <div class="scrollable-content">
            <div class="xc-table">
                <div class="xc-row xc-header">
                    <div class="xc-data">
                        Keyword
                    </div>
                    <div class="xc-data">
                        Notes
                    </div>
                    <div class="xc-data">
                        Last accessed
                    </div>
                    <div class="xc-data actions"></div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">horse in the grass</div>
                    <div class="xc-data">
                        <span class="length-limit">
                            This is important information that we must keep an eye on. Keep in mind that this string is
                            very long
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">horse in the grass</div>
                    <div class="xc-data">
                        <span class="length-limit">
                            This is important information that we must keep an eye on. Keep in mind that this string is
                            very long
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">horse in the grass</div>
                    <div class="xc-data">
                        <span class="length-limit">
                            This is important information that we must keep an eye on. Keep in mind that this string is
                            very long
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
                <div class="xc-row">
                    <div class="xc-data">
                        <span class="length-limit">
                            This line is far too long too long for stuffs
                        </span>
                    </div>
                    <div class="xc-data">
                        <span class="length-limit">
                            So we decided to cut it.
                        </span>
                    </div>
                    <div class="xc-data">2021-10-21 20:21</div>
                    <div class="xc-data actions">
                        <button class="action-button">
                            <icon-component icon="edit" />
                        </button>
                        <button class="action-button">
                            <icon-component icon="delete" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.action-button {
    color: #ff0;
}
</style>