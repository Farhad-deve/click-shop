import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { toggleFavorite } from "../../../entities/favorite";
import { useAppDispatch, useAppSelector } from "../../../shared/lib/hooks";
import type { MouseEvent } from "react";

interface FavoriteButtonProps {
    productId: string;
    className?: string;
}

export const FavoriteButton = ({ productId, className }: FavoriteButtonProps) => {
    const dispatch = useAppDispatch();
    const isFavorite = useAppSelector((state) => state.favorite.ids.includes(productId));

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(toggleFavorite(productId));
    };

    return (
        <>
            <button type="button" onClick={handleClick} aria-label="Add to favorites" className={`${className} ${isFavorite ? "border-red-500" : ""}`}>
                {isFavorite ? <BiSolidHeart className="text-red-500" /> : <BiHeart />}
            </button>
        </>
    )
}

