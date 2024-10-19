import { Injectable } from '@nestjs/common';
import { mockUsers } from '../../mock';
import configurations from '../../configurations';

@Injectable()
export class UserService {
  async getUser() {
    return mockUsers
  }

  async putUser(name) {
    if (name.length > 0) {
      return `User's name ${name} and port ${configurations().port}`
    }

    return "User not found"
  }
}
