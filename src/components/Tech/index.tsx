interface TechBadgeProps {
    name: string
}
export function TechBadge({name} : TechBadgeProps){
    return(
        <span>
            {name}
        </span>
    )
}