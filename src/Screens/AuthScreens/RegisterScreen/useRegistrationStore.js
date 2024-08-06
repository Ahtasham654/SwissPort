import {create} from 'zustand';
import {handleApi} from '../../../utlis/handleApi';

const useRegisterStore = create(set => ({
  toggle: false,
  loading: false,
  status: '',
  setToggle: toggle => set({toggle}),
  setLoading: loading => set({loading}),
  setStatus: status => set({status}),

  onSubmitForm: async (values, navigation, faceData) => {
    set({loading: true});
    try {
      const payload = {...values, faceData};
      const result = await handleApi.post('register', payload);
      console.log('result', result);
      if (result?.status === 201) {
        console.log('User Register Successfully');
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      console.log('error', error);
      set({
        status:
          error?.response?.data?.message ||
          'Registration failed. Please try again.',
      });
    } finally {
      set({loading: false});
    }
  },
}));

export default useRegisterStore;
