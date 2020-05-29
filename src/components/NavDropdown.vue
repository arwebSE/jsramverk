<template>
    <div
        class="dropdown is-right"
        v-bind:class="{ 'is-active': isDropdownActive }"
        v-on-clickaway="away"
    >
        <div
            class="dropdown-trigger"
            @click="isDropdownActive = !isDropdownActive"
        >
            <a aria-haspopup="true" aria-controls="{ 'dropdown-menu'}">
                <span>Redovisning </span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </a>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <router-link to="/reports/week/1" class="dropdown-item">
                    <span>Kmom01</span>
                </router-link>
                <router-link to="/reports/week/2" class="dropdown-item">
                    <span>Kmom02</span>
                </router-link>
                <router-link to="/reports/week/3" class="dropdown-item">
                    <span>Kmom03</span>
                </router-link>
                <router-link to="/reports/week/4" class="dropdown-item">
                    <span>Kmom04</span>
                </router-link>
                <router-link to="/reports/week/5" class="dropdown-item">
                    <span>Kmom05</span>
                </router-link>
                <router-link to="/reports/week/6" class="dropdown-item">
                    <span>Kmom06</span>
                </router-link>
                <router-link to="/reports/week/10" class="dropdown-item">
                    <span>Kmom10</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
    name: "NavDropdown",
    props: ["id"],
    mixins: [clickaway],
    data() {
        return {
            isDropdownActive: false
        };
    },
    methods: {
        away() {
            this.isDropdownActive = false;
        }
    }
};
</script>
