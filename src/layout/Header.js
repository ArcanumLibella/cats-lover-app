import React from 'react'

export default function Header() {
    return (
        <header className="bg-red-400 font-bold shadow-md">
            <nav className="container mx-auto flex justify-between p-4 text-white">
                <a className="uppercase" href="/">🐱 The Cats Lover App</a>

                <ul className="flex">
                    <li className="mx-4 cursor-pointer hover:text-red-700 transition-all"><a href="/">Lien 1</a></li>
                    <li className="ml-4 cursor-pointer hover:text-red-700 transition-all"><a href="/">Lien 2</a></li>
                </ul>
            </nav>
        </header>
    )
}
