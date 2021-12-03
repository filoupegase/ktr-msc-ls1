export class PropertyData {
  /**
   * @constructs
   * @param {string} _id
   * @param {string} name
   * @param {string} companyName
   * @param {string} emailAddress
   * @param {number} phoneNumber
   */
  constructor(
      _id,
      name,
      companyName,
      emailAddress,
      phoneNumber
  ) {
    this._id = _id;
    this.name = name;
    this.companyName = companyName;
    this.emailAddress = emailAddress;
    this.phoneNumber = phoneNumber;
  }
}

export class PropertyDataList {

  constructor(advertisements) {
    this.advertisements = advertisements;
  }

  findById(id) {
    return this.advertisements.find(
        (ad) => ad.id === id
    );
  }
}