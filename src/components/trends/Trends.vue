<template>
    <div class="all-trends-container">
        <div class="trends-header">
            <h6>Trending for you</h6>
            <span><i class="fas fa-cog"></i></span>
        </div>
        <Trend  v-for="trend in ShowMoreTrendItemssd" :key="trend.index" :trend="trend" />
        <div class="single-trends">
            <a href="" v-on:click.prevent="ShowMoreTrendItems">Show More</a>
        </div>
    </div>
</template>

<script>
import Trend from './Trend'
export default {
    components: {
        Trend
    },
    data(){
        return {
            trendCount : 5,
            trends : [
                {
                    catagory: 'Cricket',
                    desc: 'ENGvPAK',
                    totalTweets: 100000
                },
                {
                    catagory: 'Football',
                    desc: 'RealvsMancity',
                    totalTweets: 150000
                },
                {
                    catagory: 'Technology',
                    desc: 'Twitter',
                    totalTweets: 50000
                },
                {
                    catagory: 'Trending in Bangladesh',
                    desc: 'DigitalMarketing',
                    totalTweets: 100000
                },
                {
                    catagory: 'Arts & culture',
                    desc: 'photography',
                    totalTweets: 100000
                },
                {
                    catagory: 'Technology',
                    desc: 'Bitcoin',
                    totalTweets: 100000
                },
                {
                    catagory: 'Technology',
                    desc: 'Samsung',
                    totalTweets: 100000
                },
            ]
        }
    },
    computed: {
        ShowMoreTrendItemssd() {
            return this.trends.slice(0, this.trendCount);
        }
    },
    methods:{
        ShowMoreTrendItems: function () {
            this.trendCount+=5;
            console.log(this.trendCount);
            return this.ShowMoreTrendItemssd;
        }
    }
}
</script>