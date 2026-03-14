import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import { store as storeArticle } from '../actions/App/Http/Controllers/ArticleController';

const formStatus = ref(false);

export function useArticleForm() {

  const form = useForm({
    title: '',
    content: ''
  });

  function send(): void {
    form.submit(storeArticle(), {
      onSuccess: (): void => {
        form.reset();
        formStatus.value = false;
      },
      onError: (errors): void => {
        console.log('validation errors', errors)
      }
    });
  }

  function showForm(): void {
    formStatus.value = true;
  }
  function closeForm(): void {
    formStatus.value = false;
    form.reset();
  }

  function cleanForm(): void {
    form.reset();
  }

  return { form, formStatus, showForm, closeForm, cleanForm, send };
}
