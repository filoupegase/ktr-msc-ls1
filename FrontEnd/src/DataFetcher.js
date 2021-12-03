import { PropertyData, PropertyDataList } from './PropertyData';

export class DataFetcher {
  constructor(dataSource) {
    this._dataSource = dataSource;
  }

  /**
   * Fetch the data and return the contents as a PropertyAdvertisementsList if the fetching is ok.
   * @returns {PropertyDataList}
   */
  async fetchSource() {
    let response = await fetch(this._dataSource, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      let data = await response.json();
      const advertisementInstances = [];
      for (let advertisement of data) {
        const advertisementInstance = new PropertyData(
            advertisement._id,
            advertisement.name,
            advertisement.companyName,
            advertisement.emailAddress,
            advertisement.phoneNumber
        );
        advertisementInstances.push(advertisementInstance);
      }
      return new PropertyDataList(advertisementInstances);
    } else {
      const message = `Oups ! Une erreur s'est produite.\n\nHTTP-Error-${ response.status } while fetching ${ this._dataSource }`;

      window.alert(message);
    }
  }
}