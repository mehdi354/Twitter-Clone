<template>
    <div class="all-tweets">
        <SingleTweet v-for="follower in following" :key="follower.index" :follower="follower"/>
    </div>
</template>
<script>
import SingleTweet from './SingleTweet'
export default {

    props: ['newTweet'],
        components: {
        SingleTweet
    },
    data(){
        return {
            following: [
                {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '20 min', tweet: 'Easy enough right? Wrong. We may be looking at some data, but it’s not very useful in its current format, some tweets have been truncated and we only have data from accounts we already follow. ', comments: '1,000', retweets: '550', like: '1,000,003'},
                {src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock', time: '55 min', tweet: ' If we want to build a structured data set for analysis we’ll have to dive deeper into the API calls output… put on your hard hat!????', comments: '2,030', retweets: '50', like: '20,003'},
                {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1,000,002', like: '5,000,003'},
                {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '100,500', retweets: '1,000,032', like: '5,000,103'},

                {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '20 min', tweet: 'Should I just quarantine on mars??', comments: '1,000', retweets: '550', like: '1,000,003'},
                {src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock', time: '55 min', tweet: 'Should me and the rock do another sub-par movie together????', comments: '2,030', retweets: '50', like: '20,003'},
                {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1,000,002', like: '5,000,003'},
                {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '100,500', retweets: '1,000,032', like: '5,000,103'}
            ]
        }
    },
    computed:{
        
    },
    methods: {
        Updatefeed(){
            this.following.splice(0,0,this.newTweet);
        }
    },

    watch: {
    newTweet: function () {
        this.Updatefeed();
    },
 }
    
}
</script>