export interface Roles{
    guest:boolean,
    client:boolean,
    manager:boolean,
    admin:boolean,
    banned:boolean,
}


export class User{
    email: string
    roles: Roles
    uid: string

    constructor(userData:any){
        this.email=userData.email
        this.uid=userData.uid
        if(userData.roles!=null){
            this.roles=userData.roles
        }
        else{
            this.roles ={
                guest:true,
                client:true,
                manager:false,
                admin:false,
                banned:false
            }
        }
    }
}