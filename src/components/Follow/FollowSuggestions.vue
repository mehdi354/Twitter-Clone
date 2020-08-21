<template>
    <div class="all-trends-container">
        <div class="trends-header">
            <h6>Who to Follow</h6>
        </div>
        <Follower  v-for="follower in ShowMoreFollowerlist" :key="follower.index" :follower="follower" />
        <div class="single-trends">
            <a href="" v-on:click.prevent="ShowMoreFollower">Show More</a>
        </div>
    </div>
</template>

<script>
import Follower from './Follower'
export default {
    components: {
        Follower
    },
    data(){
        return {
            followerSuggestionsCount :3,
            followerList : [
                {
                    img: 'KmKHXRZI_bigger.jpg',
                    name: 'bond',
                    username: '@bond',
                    isvarified: true
                },
                {
                    img: 'KmKHXRZI_bigger.jpg',
                    name: 'bond',
                    username: '@bond',
                    isvarified: true
                },
                {
                    img: 'KmKHXRZI_bigger.jpg',
                    name: 'bond',
                    username: '@bond',
                    isvarified: true
                },
                {
                    img: 'KmKHXRZI_bigger.jpg',
                    name: 'bond',
                    username: '@bond',
                    isvarified: true
                },
                {
                    img: 'KmKHXRZI_bigger.jpg',
                    name: 'bond',
                    username: '@bond',
                    isvarified: true
                },
                {
                    img: 'KmKHXRZI_bigger.jpg',
                    name: 'bond',
                    username: '@bond',
                    isvarified: true
                },
                {
                    img: 'KmKHXRZI_bigger.jpg',
                    name: 'bond',
                    username: '@bond',
                    isvarified: true
                },
            ]
        }
    },
    computed: {
        ShowMoreFollowerlist() {
            return this.followerList.slice(0, this.followerSuggestionsCount);
        }
    },
    methods:{
        ShowMoreFollower: function () {
            this.followerSuggestionsCount+=3;
            console.log(this.followerSuggestionsCount);
            return this.ShowMoreTrendItemssd;
        }
    }
}
</script>