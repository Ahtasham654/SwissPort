import {create} from 'zustand';
import {handleApi} from '../../../utlis/handleApi';

const useCreatePasswordStore = create(set => ({
  loading: false,
  setLoading: loading => set({loading}),
  postSubmitForm: async (values, navigation) => {
    const {password, email, tfa_code} = values;
    const dataToSend = {password, email, tfa_code};

    set(state => ({loading: true}));
    try {
      const result = await handleApi.post('reset-password', dataToSend);
      if (result?.status === 200) {
        console.log('Password successfully reset', result?.data);
        set(state => ({loading: false}));
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      console.log('error', error);
      set(state => ({loading: false}));
    }
  },
}));

export default useCreatePasswordStore;
