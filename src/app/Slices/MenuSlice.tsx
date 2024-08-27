import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Menu } from '../Models/MenuModel';

interface MenuState {
  menuList: Menu[];
  selectedMenu: Menu | null;
}

const initialState: MenuState = {
  menuList: [
    {
        id: 0,
        menuName: 'Goat Leg Soup',
        description: '',
        ingredients: 'Goat Leg,Chilly,peapper',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Soup',
        HotSeller: 'High',
        staticImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O_pNsPjd1DkY1GC8ygVTjNgO6hp3-7pKRA&s',
    },
    {
        id: 1,
        menuName: '7 up',
        description: '',
        ingredients: 'sugar',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Drinks',
        HotSeller: 'High',
        staticImage:'https://th.bing.com/th/id/R.8810a8ba712bc6b42ca6a6f53e2a947f?rik=2dCnsC8I6078gQ&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f3009%2f9434%2fproducts%2f7-UP-can_1200x.jpg%3fv%3d1518899284&ehk=rsXk99GJNFIfY%2brtNuvHpGVG%2bqHcIGPI1IU8QeCi1Zk%3d&risl=&pid=ImgRaw&r=0',
    },
    {
        id: 2,
        menuName: 'CoCo Cola',
        description: '',
        ingredients: 'sugar',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Drinks',
        HotSeller: 'High',
        staticImage:'https://images.unsplash.com/photo-1630404365865-97ff92feba6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMGRyaW5rfGVufDB8fDB8fHww',
    },
    {
        id: 3,
        menuName: 'Smoked salmon blinis',
        description: 'Three smoked salmon blinis with caviar and a sprig of fresh dill',
        ingredients: 'caviar,fresh dill',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Appetizer',
        HotSeller: 'High',
        staticImage:'https://media.istockphoto.com/id/184949465/photo/smoked-salmon-blinis.jpg?s=612x612&w=0&k=20&c=s6B6jkqEZONFX_wsyDAulmMzyrsLqtAJS0QxiFV9gUI=',
    },
    {
        id: 4,
        menuName: 'Foie gras and cranberry chutney',
        description: 'Three smoked salmon blinis with caviar and a sprig of fresh dill',
        ingredients: 'caviar,fresh dill',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Appetizer',
        HotSeller: 'High',
        staticImage:'https://media.istockphoto.com/id/613115478/photo/foie-gras-and-cranberry-chutney.jpg?s=612x612&w=0&k=20&c=BiWik9zaYppnTVInXtUb3SuuWIoy9DsAZv6a5oMvjek=',
    },
    {
        id: 5,
        menuName: 'Loaded Broccoli Salad',
        description: '',
        ingredients: 'Broccoli',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Salad',
        HotSeller: 'Low',
        staticImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpKklvQ0TKE8Z-1DbHly0DWG1m8T0xrtbug&s',
    },
    {
        id: 6,
        menuName: 'Ice Cream',
        description: '',
        ingredients: 'Ice, Sugar',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Dessarts',
        HotSeller: 'High',
        staticImage:'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/homemade-ice-cream.jpg',
    },
    {
        id: 7,
        menuName: 'Muffins Cakes',
        description: '',
        ingredients: 'sugar, floar',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Dessarts',
        HotSeller: 'High',
        staticImage:'https://cdn.pixabay.com/photo/2024/04/13/11/29/muffins-8693748_1280.jpg',
    },
    {
        id: 8,
        menuName: 'Pumpkin and carrot soup',
        description: '',
        ingredients: 'pumpkin, carrot',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Soup',
        HotSeller: 'High',
        staticImage:'https://media.istockphoto.com/id/1177031727/photo/pumpkin-and-carrot-soup-with-cream-on-grey-stone-background-top-view.jpg?s=612x612&w=0&k=20&c=HmxXL082ccHLy1KAKJxyD-bMcvzTV-OrpoBhtUhV500=',
    },
    {
        id: 9,
        menuName: 'Chiken soup',
        description: '',
        ingredients: 'chiken bone, peapper',
        price: '$2',
        offers: '15%',
        deals: 'Buy 1 Get 1',
        discounts: '',
        Categories: 'Soup',
        HotSeller: 'High',
        staticImage:'https://media.istockphoto.com/id/1057597370/photo/broth-chicken-soup-with-noodles-in-a-white-bowl-on-wood-background-in-rustic-stye.jpg?s=612x612&w=0&k=20&c=N4zdRMFDzIjx3Z8Ri1GUigiHeu8jur32YyYi8k3bKw4=',
    },
  ], 
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
      console.log(action.payload);
      
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
