import {create} from 'zustand';
import {handleApi} from '../../../utlis/handleApi';

const useVerifyEmailStore = create(set => ({
  loading: false,
  passwordData: null,
  status: '',
  email: '',
  setLoading: loading => set({loading}),
  setPasswordData: passwordData => set({passwordData}),
  setEmail: email => set({email}),

  onSubmitForm: async (values, navigation) => {
    set({loading: true, passwordData: values});
    try {
      const result = await handleApi.post('verify-code', values);
      if (result.status === 200) {
        console.log('OTP code is verified', result?.data);
        navigation.navigate('CreatePassword');
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

export default useVerifyEmailStore;
