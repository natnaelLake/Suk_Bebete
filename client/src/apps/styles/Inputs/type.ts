export interface inputTypes {
    label?:string;
    showError?:boolean;
    type:'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'button';
    errorMessage?:string;
    placeholder?:string;
}