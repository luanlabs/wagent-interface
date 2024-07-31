import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  shopLogo: string;
  shopName: string;
}

const initialState: ProfileState = {
  shopLogo: '/images/p.jpg',
  shopName: 'Amanda Shop',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<ProfileState>) {
      state.shopLogo = action.payload.shopLogo;
      state.shopName = action.payload.shopName;
    },
    clearProfile(state) {
      state.shopLogo = '/images/default.jpg';
      state.shopName = '';
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
