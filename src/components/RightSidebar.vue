<template>
    <div class="right-sidebar pr-5">
        <div class="search-container">
            <input type="text" placeholder="Search Tweet">
            <div class="form-icon">
                <i class="fas fa-search"></i>
            </div>
        </div>

        <Trends />
        <FollowSuggestions />
        <Footer />
    </div>
</template>

<script>
import Trends from './trends/Trends'
import FollowSuggestions from './Follow/FollowSuggestions'
import Footer from './Footer'
export default {
    components: {
        Trends,FollowSuggestions,Footer
    }
}
</script>