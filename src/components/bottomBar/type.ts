export interface props {
    item: BottomBarItem;
    index: number;
    selectedIndex: number;
};

export interface BottomBarItem {
    id: number,
    name?: string,
    default?: number,
    darkMode?: number,
    selected?: number,
    route: string,
}