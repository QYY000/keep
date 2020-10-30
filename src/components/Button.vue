<template>
    <button class="slotbtn">
        <slot name="button"></slot>
    </button>
</template>
<style >
.slotbtn{
    width: 70px;height: 26px;
    border-radius: 8px;
    border:1px solid #707070;
    line-height: 26px;
    text-align: center;
    background-color: #fff;
    outline: none;
    padding: 0;margin: 0;
}
</style>