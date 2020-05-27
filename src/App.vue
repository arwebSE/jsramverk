<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/reports">Reports</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
$accent: #509fda;
$dark: #777;
$darker: #333;

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $darker;
}

#nav {
    padding: 30px;
    text-decoration: none !important;

    a {
        font-weight: bold;
        color: $dark;
        &:hover {
            color: $accent;
        }

        &.router-link-exact-active {
            color: $darker;
        }
    }
}
</style>
