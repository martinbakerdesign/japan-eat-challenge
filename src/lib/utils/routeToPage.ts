import { goto } from "$app/navigation";

export default function routeToPage(route: string, replaceState: boolean = false) {
    goto(route, { replaceState }) 
}