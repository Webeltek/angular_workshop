import { ValidatorFn } from "@angular/forms";


export function emailValidator(domains: string[]): ValidatorFn {
    const domainStr =  domains.join('|');
    const regExp = new RegExp(`[A_Za-z0-9\.]{6,}@gmail\.(${domainStr})`)
    console.log({regExp});
    
    return (control)=>{
        const isValid =control.value === '' || regExp.test(control.value)
        console.log(isValid);
        
        return isValid ? null: { emailValidator : true}
    }
}