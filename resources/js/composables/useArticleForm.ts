import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

const formStatus = ref(false);

export function useArticleForm(){

    const form = useForm({
    title: '',
    content: ''
});

function showForm(){
    formStatus.value = true;
}
function closeForm(){
    formStatus.value = false;
    form.reset();
}

function clearForm(){
    form.reset();
}

    return {form, formStatus, showForm, closeForm, clearForm};
}