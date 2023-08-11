import { DesignSystem } from "../../components/DesignSystems";
import { Iroute } from "./type";

export const routes:Iroute[] = [
    {
        element:<DesignSystem/>,
        path:'/',
        exact:true,
        isProtected:true,
        allowedRole:'admin'
    }
]