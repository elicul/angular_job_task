import { Base } from "./base";

export class Project extends Base {
    public user_id: number;

    constructor(id:number, name:string, description:string, user_id:number){
        super(id, name, description);
        this.user_id = user_id;
    }
}
