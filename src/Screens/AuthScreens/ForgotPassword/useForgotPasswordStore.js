import {create} from 'zustand';
import {handleApi} from '../../../utlis/handleApi';

const useForgotPasswordStore = create(set => ({
  loading: false,
  status: '',
  email: null,
  setLoading: loading => set({loading}),
  setStatus: status => set({status}),
  setEmail: email => set({email}),

  onSubmitForm: async (values, navigation) => {
    set({loading: true});
    set(state => ({email: values.email}));
    try {
      const result = await handleApi.post('forgot-password', values);
      if (result?.status === 200) {
        console.log('Code is sent to the email');
        navigation.navigate('VerifyEmail');
      }
    } catch (error) {
      console.log('error', error);
      set({
        status:
          error.response?.data?.message ||
          'Something went wrong, please try again.',
      });
    } finally {
      set({loading: false});
    }
  },
}));

export default useForgotPasswordStore;
