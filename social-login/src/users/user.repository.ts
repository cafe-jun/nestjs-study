import { Users } from 'src/entities/user.entitiy';
import { CustomRepository } from '../config/typeorm-ex/typeorm-ex.decorator';

@CustomRepository(Users)
export class UsersRepository {}
