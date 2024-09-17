import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandType } from '../Models/BrandModel';

export interface BrandState {
  brandList: BrandType[];
  selectedBrand: BrandType | null;
}

const initialState: BrandState = {
  brandList: [],
  selectedBrand: null,
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    addBrand: (state, action: PayloadAction<BrandType>) => {
      state.brandList.push(action.payload);
    },
    updateBrand: (state, action: PayloadAction<BrandType>) => {
      const index = state.brandList.findIndex(
        (brand) => brand.brandId === action.payload.brandId
      );
      if (index !== -1) {
        state.brandList[index] = action.payload;
      }
    },
    removeBrand: (state, action: PayloadAction<{ id: string }>) => {
      state.brandList = state.brandList.filter(
        (brand) => brand.brandId !== action.payload.id
      );
    },
    setSelectedBrand: (state, action: PayloadAction<BrandType | null>) => {
      state.selectedBrand = action.payload;
    },
  },
});

export const {
  addBrand,
  updateBrand,
  removeBrand,
  setSelectedBrand,
} = brandSlice.actions;

export default brandSlice.reducer;