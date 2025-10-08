import { create } from 'zustand';

type ScreenStore = {
  screen: string;
  activeKey: string;
 // inner: string;
  setScreenAndKey: (screen: string, activeKey?: string) => void;
};

const useScreenStore = create<ScreenStore>((set) => ({
  screen: "My Details",
  activeKey: "My Details",
  //inner : 'one',
  setScreenAndKey: (screen, activeKey = screen) =>
    set({ screen, activeKey }),
}));

export default useScreenStore;
/* 
 
 */