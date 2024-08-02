// useLoginStore.js
import {create} from 'zustand';
import {handleApi} from '../../../utlis/handleApi';

const useLoginStore = create(set => ({
  secure: true,
  loading: false,
  status: '',
  setSecure: secure => set({secure}),
  setLoading: loading => set({loading}),
  setStatus: status => set({status}),

  handleSubmitForm: async (values, navigation) => {
    set({loading: true});
    try {
      const result = await handleApi.post('login', values);
      console.log('result', result);
      if (result?.data?.Status === 200) {
        console.log('login Successfully');
        navigation.navigate('Dashboard');
      }
    } catch (error) {
      console.log('error', error);
      set({
        status:
          error?.response?.data?.message ||
          'Invalid login details. Please try again. ',
      });
    } finally {
      set({loading: false});
    }
  },
}));

export default useLoginStore;
