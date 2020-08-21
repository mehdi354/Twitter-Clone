<template>
    <main class="main">
        <div class="top-headerbar">
            <div class="col-md-12">
                <h2>Home</h2>
                <span><i></i></span>
            </div>
        </div>
        <Tweet @addTweet="updateTweet"/>
        <AllTweets :newTweet="newTweet"/>
    </main>
</template>
<script>
import Tweet from './Tweet'
import AllTweets from './AllTweets'
export default {
    components : {
        Tweet,AllTweets
    },
    data(){
        return {
           newTweet: ''
        }
    },
    methods: {
        updateTweet(tweet){
            this.newTweet = tweet
        }
    }
}
</script>