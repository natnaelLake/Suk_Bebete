export interface Iroute {
    path:string;
    exact:boolean;
    element:JSX.Element;
    isProtected:boolean;
    redirect?:string;
    allowedRole:string;
}