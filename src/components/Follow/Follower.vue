<template>
    <div class="single-follow">
        <div class="follower-img pro-img img-sm img-rounded">
              <img :src="'https://pbs.twimg.com/profile_images/1249652194426515456/' + follower.img" alt="">
        </div>
        <div class="follower-info">
            <div class="followerdetails">
                <h6> {{follower.name}} </h6>
                <p> {{follower.username}}  </p>
            </div>
            <div class="follow-btn">
                <a href="#">Follow</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['follower'],
    // data(){
    // }
}
</script>