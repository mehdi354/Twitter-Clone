<template>
    <div class="single-trends">
        <h6 class="trend-type"> 
            {{trend.catagory}} 
            <span class="trend-text"> Trending</span> 
            <span class="pull-right"><i class="fas fa-chevron-down"></i></span>
        </h6>
        <h2 class="trend-desc"> {{trend.desc}} </h2>
        <p>{{trend.totalTweets | numberFormattor }} Tweets</p>
    </div>
</template>

<script>
export default {
    props:['trend'],
    // data(){
    // }
}
</script>