import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Menu } from '../Models/MenuModel';

interface MenuState {
  menuList: Menu[];
  selectedMenu: Menu | null;
}

const initialState: MenuState = {
  menuList: [], // Initialize with an empty array or some predefined data
  selectedMenu: null,
};

const MenuSlice = createSlice({
  name: 'MenuSlice',
  initialState,
  reducers: {
    addMenu: (state, action: PayloadAction<Menu>) => {
      const id = Math.random() * 1000;
      const menu = { ...action.payload, id };
      state.menuList.push(menu);
    },
    removeMenu: (state, action: PayloadAction<{ id: number }>) => {
      state.menuList = state.menuList.filter(
        (menu) => menu.id !== action.payload.id,
      );
    },
    updateMenu: (state, action: PayloadAction<Menu>) => {
      state.menuList = state.menuList.map((menu) =>
        menu.id === action.payload.id ? action.payload : menu,
      );
    },
    setSelectedMenu: (state, action: PayloadAction<Menu | null>) => {
      state.selectedMenu = action.payload;
    },
  },
});

export const {
  addMenu,
  removeMenu,
  updateMenu,
  setSelectedMenu,
} = MenuSlice.actions;

export default MenuSlice.reducer;
export type { MenuState };
