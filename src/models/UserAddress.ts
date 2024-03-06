class UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };

  constructor(args: any) {
    this.street = args.street ?? '';
    this.suite = args.suite ?? '';
    this.city = args.city ?? '';
    this.zipcode = args.zipcode ?? '';
    this.geo = args.geo ?? null;
  }
}

export default UserAddress;
