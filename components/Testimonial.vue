<template>
    <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
            <img 
                class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" 
                :src=img_src>
        </div>
        <div>
            <h2 class="text-gray-800 text-3xl font-semibold">{{ title }}</h2>
            <p class="mt-2 text-gray-600">{{ content }}</p>
        </div>
        <div class="flex justify-end mt-4">
            <a href="#" class="text-xl font-medium text-indigo-500">{{ name }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img_src : String,
        title : String,
        content : String,
        name : String
    }
}
</script>

<style>

</style>