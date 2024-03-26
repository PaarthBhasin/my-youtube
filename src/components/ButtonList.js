import React from "react"
import Button from "./Button"

const lists = [
    "All",
    "Gaming",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
    "Songs",
    "Valentines",
]

const ButtonList = () => {
    return (
        <div className="flex">
            {lists.map((list, index) => (
                <Button key={index} name={list} />
            ))}
        </div>
    )
}

export default ButtonList
