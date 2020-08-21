<template>
    <div class="left-sidebar">
        <div class="pl-5"> 
            <div class="logo">
                <div class="img-round">
                    <img src="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png" alt="">
                </div>
            </div>
            <nav class="nav">
                <ul>
                    <li v-for="menu in menus" :key="menu.index">
                    <a href=""> 
                        <span> <i :class="menu.icon"></i></span> 
                        <span class="menu-text">  {{menu.name}} </span>    
                    </a>
                    </li>
                </ul>
                <a href="" class="btn btn-primary btn-tweet">Tweet</a>

                <div class="user-link">
                    <div class="row">
                        <div class="col-md-3 col-4">
                            <div class="pro-img img-sm img-rounded">
                                <img src="https://pbs.twimg.com/profile_images/1249652194426515456/KmKHXRZI_bigger.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-md-9 col-8">
                            <div class="tweeter-info">
                                <h6> James Bond   </h6>
                                <p> <a href="">@jamesbond</a> </p>
                            </div>
                            <div class="twitter-controller">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            menus: [
                {icon:'fas fa-home', name: 'Home'},
                {icon:'fas fa-hashtag', name: 'Explore'},
                {icon:'far fa-bell', name: 'Notifications'},
                {icon:'far fa-envelope', name: 'Messages'},
                {icon:'far fa-bookmark', name: 'Bookmarks'},
                {icon:'fas fa-clipboard-list', name: 'Lists'},
                {icon:'far fa-user', name: 'Profile'},
                {icon:'fas fa-ellipsis-h', name: 'More'},
            ]
        }
    }
}
</script>