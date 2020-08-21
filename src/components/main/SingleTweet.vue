<template>
    <div class="single-tweet">
        <div class="row">
            <div class="col-md-2 pr-0 pl-4 col-4">
                <div class="pro-img img-sm img-rounded">
                    <img src="https://pbs.twimg.com/profile_images/1249652194426515456/KmKHXRZI_bigger.jpg" alt="">
                </div>
            </div>
            <div class="col-md-10 pl-0 pr-4 col-8">
                <div class="tweeter-info">
                    <h6> {{follower.name}} <span> {{follower.handle}} </span>   </h6>
                    <p>{{follower.time}}</p>
                    <div class="twitter-controller">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div class="tweet-body">
                    <p>{{follower.tweet}}</p>
                </div>
                <div class="tweet-actions">
                    <ul>
                        <li><i class="far fa-comment"></i> <span>{{follower.comments}}</span></li>
                        <li><i class="fas fa-retweet"></i> <span>{{follower.retweets}}</span></li>
                        <li><i class="far fa-heart"></i><span>{{follower.like}}</span></li>
                        <li><i class="fas fa-external-link-alt"></i><span></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['follower']
}
</script>