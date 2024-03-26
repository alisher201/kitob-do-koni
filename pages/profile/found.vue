<template>
    <div>
        <div class="div">
            <h1 class="h1">{{$t("home.profile.Notification")}}</h1>
            <div class="div1">
                <img src="@/assets/profile/Not_found.svg" alt="">
                <h2>{{$t("home.profile.There are no new notifications")}}</h2>
            </div>
        </div>  
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.div{
    width: 958px;
    height: 538px;
    top: 232px;
    left: 479px;
    border-radius: 10px;
    background-color: #FAFAFA;
    // background-color: red;
    margin:40px 121px 100px 30px;
    
}
.h1{
    width: 136px;
    height: 27px;
    top: 250px;
    left: 509px;
    font-family: Manrope;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.02em;
    text-align: left;
    color:#35363D;
    margin: 18px 674px 45px 30px;
}

img{
    width: 300px;
    height: 300px;
    top: 322px;
    left: 749px;
    margin: 45px 270px 30px 320px;
    display: flex;
}
h2{
    width: 238px;
    height: 27px;
    top: 652px;
    left: 780px;
    font-family: Manrope;
    font-size: 20px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.02em;
    text-align: left;
    color:#35363D;
    margin: 30px 301px 91px 320px;
}
</style>