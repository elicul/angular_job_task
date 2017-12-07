import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Role } from '../classes/role';
import { Project } from '../classes/project';
import { Task } from '../classes/task';

@Injectable()
export class AppService {

  private roles: Role[]; 
  private users: User[]; 
  private projects: Project[]; 
  private tasks: Task[]; 

  constructor() { 
    this.roles = new Array<Role>(); 
    this.users = new Array<User>(); 
    this.projects = new Array<Project>(); 
    this.tasks = new Array<Task>(); 
  }

  public init(){
    this.generateRoles();
    this.generateUsers(),
    this.generateProjects();
    this.generateTasks();
  }

  public generateRoles(){
    this.roles.push(new Role(1, 'admin', 'Administrator'));
    this.roles.push(new Role(2, 'manager', 'Manager'));
    this.roles.push(new Role(3, 'worker', 'Worker'));
  }
  public generateUsers(){
    this.users.push(new User(1, 'Luka', 'luka@ebe-inc.com', Math.random() >= 0.5, this.getRandomInt(1,this.roles.length)));
    this.users.push(new User(2, 'Marko', 'marko@ebe-inc.com', Math.random() >= 0.5, this.getRandomInt(1,this.roles.length)));
    this.users.push(new User(3, 'Ante', 'ante@ebe-inc.com', Math.random() >= 0.5, this.getRandomInt(1,this.roles.length)));
    this.users.push(new User(4, 'Dino', 'dino@ebe-inc.com', Math.random() >= 0.5, this.getRandomInt(1,this.roles.length)));
    this.users.push(new User(5, 'Alen', 'alen@ebe-inc.com', Math.random() >= 0.5, this.getRandomInt(1,this.roles.length)));
  }
  public generateProjects(){
    for (let index = 1; index < 6; index++) {
      this.projects.push(new Project(index, 'Project ' + index, 'Undefined', this.getRandomInt(1,this.users.length)));     
    }
  }
  public generateTasks(){
    for (let index = 1; index < 21; index++) {
      this.tasks.push(new Task(index, 'Task ' + index, 'Undefined', this.getRandomInt(1,this.projects.length)));     
    }
  }

  public getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

}
