import actionTypes from "../actions/actionTypes";

const initialState = {
    session: true,
    //权限
    permission: {
        home: true,
        about: true,
        topics: true
    },
    menuList: [
        // {
        //     url: 'home',
        //     name: 'Home'
        // },
        // {
        //     url: 'about',
        //     name: 'About'
        // },
        // {
        //     url: 'topics',
        //     name: 'Topics'
        // }
    ]
}

export default function global(state = initialState, action) {
    switch(action.type) {
        case actionTypes.GET_MENU_LIST:
            return {
                ...state,
                menuList: action.list
            };
        default:
            return state
    }
}
