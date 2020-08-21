<template>
    <section class="tweet-container">
        <div class="row">
            <div class="col-md-2 col-3 pr-0 pl-4">
                <div class="pro-img img-sm img-rounded">
                    <img src="https://pbs.twimg.com/profile_images/1249652194426515456/KmKHXRZI_bigger.jpg" alt="">
                </div>
            </div>
            <div class="col-md-10 col-9 pl-0 pr-4">
                <div class="tweet-textarea">
                    <textarea class="form-control-textarea" placeholder="What's happening" v-model="tweets">  </textarea>
                    <a href=""><i class="fas fa-globe-asia"></i>Everyone can reply</a>
                </div>
                <div class="tweet-controller">
                    <div class="row">
                        <div class="col-md-8">
                            <ul>
                                <li><a href=""><i class="far fa-image"></i></a></li>
                                <li><a href=""><i class="far fa-smile"></i></a></li>
                                <li><a href=""><i class="fas fa-calendar-day"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 text-right">
                            <button class="tweet-btn" @click="updateTweet">Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            tweets:"",
             newtweet: 
            {
                src: 'elon.jpg', 
                name: 'Hellboy', 
                handle: '@Hellboy', 
                tweet: '',
                time: '1 min', 
                comments: '0', 
                retweets: '0', 
                like: '0'
            }
        }
    },
    methods:{
        updateTweet(){
            this.newtweet.tweet = this.tweets;
            this.$emit('addTweet', this.newtweet);
            this.tweets = '';
        }
    },
}
</script>