import { tv } from "tailwind-variants";

import { useState, useRef, useEffect } from "react"

const dropdown = tv({
    slots: {
        base: 'relative',
        mainButton: 'text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 transition duration-150 px-4 py-1 rounded-md cursor-pointer',
        menu: 'absolute right-0 flex flex-col text-sm bg-white border border-gray-400 min-w-32 rounded-md',
        menuButton: 'hover:bg-gray-200 flex py-1 px-2 cursor-pointer',
    },
    variants: {
        position: {
            left: {menu: 'left-0'},
            right: {menu: 'right-0'}
        },
        alignment: {
            left: {menuButton: 'justify-start'},
            right: {menuButton: 'justify-end'}
        }
    }
});

export interface DropdownProps {
    label: string;
    items: Array<{
        name: string;
        action: () => void;
    }>
    position?: "left" | "right"
    alignment?: "left" | "right"
}

export function Dropdown({ label, items, position="right", alignment = "right" } : DropdownProps){
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const {base, mainButton, menu, menuButton} = dropdown({ position, alignment });
    
    return (
    <div ref={dropdownRef} className={base()}>
        {/* Botão */}
        <button 
            onClick={toggleDropdown} 
            className={mainButton()}>
            {label}
        </button>

        {/* Menu */}
        {isOpen && <div className={menu()}>
            {items.map((item) => 
            <button onClick={item.action} className={menuButton()}>{item.name}</button>
            )}
        </div>}
    </div>
    )
}