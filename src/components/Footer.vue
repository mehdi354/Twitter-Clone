<template>
    <div class="footer">
        <ul>
            <li v-for="menu in footerMenu" :key="menu.index"> {{menu}} </li>
        </ul>    
        <p> &copy; 2020 Twitter, Inc.</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            footerMenu: ['Terms','Privacy policy','Cookies','Ads info','More']
        }
    }
}
</script>