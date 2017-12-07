export class User {
    public id: number;
    public name: string;
    public email: string;
    public is_active: boolean;
    public role_id: number;

    constructor(id:number, name:string, email:string, is_active:boolean, role_id:number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.is_active = is_active;
        this.role_id = role_id;
    }
}
