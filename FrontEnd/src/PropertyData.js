export class PropertyData {
  /**
   * @constructs
   * @param {string} _id
   * @param {string} title
   * @param {string} description
   * @param {string} imageUrl
   * @param {string} userId
   * @param {number} price
   * @param {number} __v
   */
  constructor(
      _id,
      title,
      description,
      imageUrl,
      userId,
      price,
      __v
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.userId = userId;
    this.price = price;
    this.__v = __v;
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