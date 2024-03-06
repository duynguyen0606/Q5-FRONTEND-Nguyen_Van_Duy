import UserAddress from './UserAddress';

class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: number;
  company: {
    name: string;
    catchPhrase: string;
    bg: string;
  };

  constructor(args: any) {
    this.id = args.id ?? null;
    this.name = args.name ?? '';
    this.username = args.username ?? '';
    this.email = args.email ?? '';
    this.address = args.address ?? null;
    this.phone = args.phone ?? '';
    this.website = args.website ?? '';
    this.company = args.company ?? null;
  }
}

export default User;
