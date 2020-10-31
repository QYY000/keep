<template>
    <div class="notes">
        <div class="ntop">
            <slot name='title_target' ></slot>
        </div>
        <div class="bottom">
            <slot name="image"></slot>
            <span>
                <h3>
                    <slot name="title_h3"></slot>
                </h3>
                <p class="fontsmall"><slot name="title_p"></slot></p>
            </span>
            <img src="../../public/img/footer/sport.svg" >
        </div>
    </div>
</template>
<style>
.notes{
    margin: 17px 0;
}
.notes .ntop{
    width: 120px;
    margin-left: 10px;
}
.notes .bottom{
    height: 100px;
    border-radius: 10px;
    background-color: #ebebeb;
    border: rgba(112, 112, 112, 0.1) solid 1px;
    margin: 5px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.notes .bottom span h3,.notes .bottom span p{
    margin-bottom: 10px;
}
</style>