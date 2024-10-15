import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  storeLogo?: string | ArrayBuffer;
  storeName: string;
}

const initialState: ProfileState = {
  storeLogo: '/images/shop.svg',
  storeName: 'Your Shop',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<ProfileState>) {
      state.storeLogo = action.payload.storeLogo;
      state.storeName = action.payload.storeName;
    },
    clearProfile(state) {
      state.storeLogo = '/images/default.jpg';
      state.storeName = '';
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
