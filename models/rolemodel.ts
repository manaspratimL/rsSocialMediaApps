import {onetomany, manytoone, manytomany} from 'nodedata/core/decorators'; 
import {IRole} from './role';
import * as UM from './usermodel';
import {Strict} from 'nodedata/mongoose/enums';
import {field, document} from 'nodedata/mongoose/decorators';

@document({ name: 'roles', strict: Strict.false })
export class RoleModel{
    @field({primary: true, autogenerated: true})
    _id: any;
    
    @field()
    name: any;
    
    //@manytoone({rel: 'users'})
    //users: Array<UserModel>;

    constructor(userDto: IRole) {
        this._id = userDto._id;
        this.name = userDto.name;
    }
}

export default RoleModel;