import { Base } from "./base";

export class Task extends Base{
    public project_id: number;

    constructor(id:number, name:string, description:string, project_id:number){
        super(id, name, description);
        this.project_id = project_id;
    }
}
