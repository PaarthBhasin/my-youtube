import React from "react"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-4 m-2 shadow sticky top-0 bg-white">
            <div className="flex col-span-1">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-8 mt-3 cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                    alt="menu"
                />
                <a href="/">
                    <img
                        className="h-14 mx-2"
                        src="https://www.gstatic.com/youtube/img/promos/growth/e325cb98c12757338cdf04af5bd196a844ebbd81e98bdafd3632ff6f5bf8fab6_244x112.webp"
                        alt="youtube-logo"
                    />
                </a>
            </div>
            <div className="col-span-10 px-24">
                <input
                    className="w-1/2 border border-gray-500 rounded-l-full p-2"
                    type="text"
                    placeholder="Search"
                />
                <button className="border border-gray-500 rounded-r-full px-5 py-2 bg-gray-100">
                    {/* <img
                        className="h-6 p-0"
                        src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
                        alt="Search-logo"
                    /> */}
                    🔍
                </button>
            </div>
            <div className="cols-span-1">
                <img
                    className="h-12"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt="user-icon"
                />
            </div>
        </div>
    )
}

export default Head
